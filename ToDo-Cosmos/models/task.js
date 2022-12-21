const CosmosClient = require('@azure/cosmos').CosmosClient;
const debug = require('debug')('todo-cosmos:task');

let partitionKey = undefined;

//ESTE es el MODELO de BASE de DATOS
class Task {
  /**
   * Lee, añade, actualiza tareas en Cosmos DB
   * @param {CosmosClient} cosmosClient 
   * @param {string} databaseID 
   * @param {string} containerId 
   */
  constructor(cosmosClient, databaseID, containerId){
    this.client = cosmosClient;
    this.databaseID = databaseID;
    this.containerId = containerId;

    this.database = null;
    this.container = null;
  }

  async init(){
    debug("Inicializando DB");

    const dbResponse = await this.client.databases.createIfNotExists( {
      id: this.databaseID
    });
    this.database = dbResponse.database;
    debug("Inicializando contenedor...");
    const contResponse = await this.database.containers.createIfNotExists({
      id: this.containerId
    });
    this.container = contResponse.container;
  }

  /**
   * Encuentr un objeto en la BD
   * @param {string} querySpec
   */
  async find(querySpec) {
    debug("Buscando en la Base de Datos");
    if (!this.container){
      throw new Error("Contenedor NO se ha inicializado")
    }
    const { resources } = await this.container.items.query(querySpec).fetchAll();

    return resources;
  }

  /**
   * Crea el Item enviado en Cosmos DB
   * @param {*} item 
   * @returns {resource} Item creado en la BD
   */
  async addItem(item){
    debug("Añadiendo item a la BD");
    item.date = Date.now();
    item.completed = false;
    const { resource: doc } = await this.container.items.create(item);

    return doc;
  }

  /**
   * Actualiza el Item en Cosmos DB
   * @param {string} itemID 
   * @returns 
   */
  async updateItem(itemID){
    debug("Actualizando ITEM a la BD");
    const doc = await this.getItem(itemID);
    doc.completed = true;

    const { resource: replaced } = await this.container.item(itemID, partitionKey).replace(doc);
    
    return replaced;
  }

  /**
   * Lee el Item en Cosmos DB
   * @param {string} itemID 
   * @returns 
   */
  async getItem(itemID){
    debug("Buscando ITEM en la BD");
    const { resource }
= await this.container.item(itemID, partitionKey);
    return resource;
  }
}

module.exports = Task;