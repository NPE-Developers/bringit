/**The publish "createList" with one parameter, the list data, you want to ad in Database
 * @param listData {ListData}
 * Created by lucadario on 29/03/17.
 */



import {container,inject} from 'dependency-injection-es6';
import {ManageListsUseCase} from '../usecase/ManageListsUseCase';
import {DatabaseSource} from '../database/DatabaseSource';

/**
 * this Publish delete from db the listData with USeCase {ManageListData}
 * @param listId {Object} the id of the list
 */


Meteor.publish('deleteList',function (listId) {
    let id = listId;
    let manageList = container.resolve(ManageListsUseCase);
    manageList.deleteList(listId);
    this.ready(id);
});