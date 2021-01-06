const chai = require('chai');

const expect = chai.expect;

const parseTrackMessageTwoService = require('./parser_generic_message.js');
const msgStruct = require('./struct_tracking_message_2.js');

const a_trackMessageTwoHex =
    'd059fa51c7e3fce803f4d92aebd5cbd316929255d7ad77a62d2dc4abaf4e2f4c5a4f49575e915e98b49192aebd11bd31694c';
const b_trackMessageTwoHex =
    'd059fa5033e88ad80074811159cf7bc87c438222b4387790f73a24456992af21ec22088ad518de43d3c01115ae08bc879e6d';

describe('Parse Track Message 2', function () {

    it('(a) should parse TrackMessage2 correctly', function (done) {
        var parsedMessage = parseTrackMessageTwoService(a_trackMessageTwoHex, msgStruct);
        expect(parsedMessage.header.value).to.be.equal(208);
        expect(parsedMessage.epochTime.value).to.be.equal(1509577159);
        expect(parsedMessage.battV.value).to.be.equal(4.1);
        expect(parsedMessage.battP.value).to.be.equal(-0.04);
        expect(parsedMessage.solarV.value).to.be.equal(6.444444444444444);
        expect(parsedMessage.stat.value).to.be.equal(0);
        expect(parsedMessage.temp.value).to.be.equal(22.5);
        expect(parsedMessage.hum.value).to.be.equal(21.6);
        expect(parsedMessage.lats_0.value).to.be.equal(0);
        expect(parsedMessage.lat_0.value).to.be.equal(37);
        expect(parsedMessage.latm_0.value).to.be.equal(3063132);
        expect(parsedMessage.lons_0.value).to.be.equal(1);
        expect(parsedMessage.lon_0.value).to.be.equal(122);
        expect(parsedMessage.lonm_0.value).to.be.equal(3238185);
        expect(parsedMessage.lats_1.value).to.be.equal(0);
        expect(parsedMessage.lat_1.value).to.be.equal(37);
        expect(parsedMessage.latm_1.value).to.be.equal(3063147);
        expect(parsedMessage.lons_1.value).to.be.equal(1);
        expect(parsedMessage.lon_1.value).to.be.equal(122);
        expect(parsedMessage.lonm_1.value).to.be.equal(3238254);
        expect(parsedMessage.lats_2.value).to.be.equal(0);
        expect(parsedMessage.lat_2.value).to.be.equal(37);
        expect(parsedMessage.latm_2.value).to.be.equal(3063096);
        expect(parsedMessage.lons_2.value).to.be.equal(1);
        expect(parsedMessage.lon_2.value).to.be.equal(122);
        expect(parsedMessage.lonm_2.value).to.be.equal(3238205);
        expect(parsedMessage.lats_3.value).to.be.equal(0);
        expect(parsedMessage.lat_3.value).to.be.equal(37);
        expect(parsedMessage.latm_3.value).to.be.equal(3063074);
        expect(parsedMessage.lons_3.value).to.be.equal(1);
        expect(parsedMessage.lon_3.value).to.be.equal(122);
        expect(parsedMessage.lonm_3.value).to.be.equal(3238179);
        expect(parsedMessage.lats_4.value).to.be.equal(0);
        expect(parsedMessage.lat_4.value).to.be.equal(37);
        expect(parsedMessage.latm_4.value).to.be.equal(3063057);
        expect(parsedMessage.lons_4.value).to.be.equal(1);
        expect(parsedMessage.lon_4.value).to.be.equal(122);
        expect(parsedMessage.lonm_4.value).to.be.equal(3238220);

        done();
    });

    it('(b) should parse TrackMessage2 correctly', function (done) {
        var parsedMessage = parseTrackMessageTwoService(b_trackMessageTwoHex, msgStruct);
        expect(parsedMessage.header.value).to.be.equal(208);
        expect(parsedMessage.epochTime.value).to.be.equal(1509576755);
        expect(parsedMessage.battV.value).to.be.equal(4.157142857142857);
        expect(parsedMessage.battP.value).to.be.equal(1.3800000000000001);
        expect(parsedMessage.solarV.value).to.be.equal(6);
        expect(parsedMessage.stat.value).to.be.equal(0);
        expect(parsedMessage.temp.value).to.be.equal(38.5);
        expect(parsedMessage.hum.value).to.be.equal(12.8);
        expect(parsedMessage.lats_0.value).to.be.equal(0);
        expect(parsedMessage.lat_0.value).to.be.equal(34);
        expect(parsedMessage.latm_0.value).to.be.equal(1416439);
        expect(parsedMessage.lons_0.value).to.be.equal(1);
        expect(parsedMessage.lon_0.value).to.be.equal(121);
        expect(parsedMessage.lonm_0.value).to.be.equal(508984);
        expect(parsedMessage.lats_1.value).to.be.equal(0);
        expect(parsedMessage.lat_1.value).to.be.equal(34);
        expect(parsedMessage.latm_1.value).to.be.equal(1417667);
        expect(parsedMessage.lons_1.value).to.be.equal(1);
        expect(parsedMessage.lon_1.value).to.be.equal(121);
        expect(parsedMessage.lonm_1.value).to.be.equal(506321);
        expect(parsedMessage.lats_2.value).to.be.equal(0);
        expect(parsedMessage.lat_2.value).to.be.equal(34);
        expect(parsedMessage.latm_2.value).to.be.equal(1418826);
        expect(parsedMessage.lons_2.value).to.be.equal(1);
        expect(parsedMessage.lon_2.value).to.be.equal(121);
        expect(parsedMessage.lonm_2.value).to.be.equal(503944);
        expect(parsedMessage.lats_3.value).to.be.equal(0);
        expect(parsedMessage.lat_3.value).to.be.equal(34);
        expect(parsedMessage.latm_3.value).to.be.equal(1419825);
        expect(parsedMessage.lons_3.value).to.be.equal(1);
        expect(parsedMessage.lon_3.value).to.be.equal(121);
        expect(parsedMessage.lonm_3.value).to.be.equal(501632);
        expect(parsedMessage.lats_4.value).to.be.equal(0);
        expect(parsedMessage.lat_4.value).to.be.equal(34);
        expect(parsedMessage.latm_4.value).to.be.equal(1420808);
        expect(parsedMessage.lons_4.value).to.be.equal(1);
        expect(parsedMessage.lon_4.value).to.be.equal(121);
        expect(parsedMessage.lonm_4.value).to.be.equal(499309);

        done();
    });
});
