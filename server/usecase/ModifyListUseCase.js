/**
 * Description: Class which represents the use case that helps modifying all the information related to a list.
 * To obtain an instance of this class be sure to include the following code inside the class that uses it:
 * <code>
 *  // Needed import
 *  import {container} from 'dependency-injection-es6';
 *
 *  // This will get your instance
 *  var modifyListUseCase = container.resolve(ModifyListUseCase);
 * <code/>
 * Created by Riccardo Montagnin on 27/03/2017.
 * Version 4.5.0 - completed
 */

import {container,inject} from 'dependency-injection-es6';
import {DatabaseSource} from "../database/DatabaseSource";
import {ListItem} from "../../data/ListItem";
import {ListData} from "../../data/ListData";

export class ModifyListUseCase{

    /**
     * Public constructor.
     */
    constructor(){
        this._databaseSource = container.getInstanceOf(DatabaseSource);
    }

    /**
     * Changes the information of a list saving it to the database.
     * If a new list is passed, it will be inserted into the database. If an already existing list is passed, it will be
     * updated.
     * @param listData {ListData}: List that needs to be saved into the database.
     */
    saveList(listData){
        this._databaseSource.saveList(listData);
    }

    /**
     * Adds an item to the list present inside the database.
     * @param listId {string}: Id of the list to which add the item.
     * @param item {ListItem}: Item to add to the list.
     */
    addItemToList(listId, item){
        const list = this._databaseSource.getListWithId(listId);
        list.addItem(item);
        this._databaseSource.saveList(list);
    }

    /**
     * Removes an item from a list.
     * @param listId {string}: Id of the list from which to delete the item.
     * @param item {ListItem}: Item to be removed from the list.
     */
    removeItemFromList(listId, item){
        const list = this._databaseSource.getListWithId(listId);
        list.removeItem(item);
        this._databaseSource.saveList(list);
    }

    /**
     * Updates an item inside a list if already present; if not then insert it into the list.
     * @param listId {string}: Id of the list which contains the item that needs to be updated.
     * @param item {ListItem}: Item which needs to be updated.
     */
    updateItemInsideList(listId, item){
        const list = this._databaseSource.getListWithId(listId);
        list.saveItem(item);

        this._databaseSource.saveList(list);
    }


}

// Register the class as a singleton so that each instance that is injected is always the same
container.registerAsSingleton(ModifyListUseCase);