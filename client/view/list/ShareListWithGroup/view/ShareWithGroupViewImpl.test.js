/**
 * Created by Stefano Lia on 25/04/2017
 * Version {VERSION} - {VERSION_NOTES}
 */



import {ShareWithGroupViewImpl} from './ShareWithGroupViewImpl';
import {ListData} from '../../../../../data/ListData';
import { Meteor } from 'meteor/meteor';

describe('ShareWithGroupViewImpl', function () {
    it('Check that is instantiable', function () {
        // This code will be executed by the test driver when the app is started
        // in the correct mode
        expect(
            () => {
                new ShareWithGroupViewImpl(); //NOSONAR
            }
        ).to.not.throw();
    });
    it("Check correct sharing", function () {
        const share = new ShareWithGroupViewImpl();
        const listData = new ListData();
        listData.setName('Test');
        listData.setCreatorId(this.userId);
        const json = {
            "bubbleType": 'Bringit',
            "listData": listData
        }
        share.onClickShareWithGroup('general',json);
        return Meteor.call('getMessage',listData.getId(),function (error,result) {
            return result != undefined;
        })
    });
});