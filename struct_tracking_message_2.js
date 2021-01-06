const trackingMessage2 = () => ({
    header: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    epochTime: {
        value: '', multiplier: 1, bits: 32, sign: false,
    },
    battV: {
        value: '', multiplier: 1 / 35, bits: 6, sign: false, offset: 2.5,
    },
    battP: {
        value: '', multiplier: 1e-2, bits: 10, sign: true,
    },
    solarV: {
        value: '', multiplier: 1 / 9, bits: 6, sign: false,
    },
    stat: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    temp: {
        value: '', multiplier: 1 / 2, bits: 8, sign: true, offset: 24,
    },
    hum: {
        value: '', multiplier: 1 / 1.25, bits: 7, sign: false,
    },
    lats_0: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lat_0: {
        value: '', multiplier: 1, bits: 7, sign: false,
    },
    latm_0: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lons_0: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lon_0: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    lonm_0: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lats_1: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lat_1: {
        value: '', multiplier: 1, bits: 7, sign: false,
    },
    latm_1: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lons_1: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lon_1: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    lonm_1: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lats_2: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lat_2: {
        value: '', multiplier: 1, bits: 7, sign: false,
    },
    latm_2: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lons_2: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lon_2: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    lonm_2: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lats_3: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lat_3: {
        value: '', multiplier: 1, bits: 7, sign: false,
    },
    latm_3: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lons_3: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lon_3: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    lonm_3: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lats_4: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lat_4: {
        value: '', multiplier: 1, bits: 7, sign: false,
    },
    latm_4: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
    lons_4: {
        value: '', multiplier: 1, bits: 1, sign: false,
    },
    lon_4: {
        value: '', multiplier: 1, bits: 8, sign: false,
    },
    lonm_4: {
        value: '', multiplier: 1, bits: 23, sign: false,
    },
});

module.exports = trackingMessage2;
