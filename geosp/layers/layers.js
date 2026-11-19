var wms_layers = [];

var format_SebarandiKapanewon_0 = new ol.format.GeoJSON();
var features_SebarandiKapanewon_0 = format_SebarandiKapanewon_0.readFeatures(json_SebarandiKapanewon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebarandiKapanewon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebarandiKapanewon_0.addFeatures(features_SebarandiKapanewon_0);
var lyr_SebarandiKapanewon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebarandiKapanewon_0, 
                style: style_SebarandiKapanewon_0,
                popuplayertitle: 'Sebaran di Kapanewon',
                interactive: true,
    title: 'Sebaran di Kapanewon<br />\
    <img src="styles/legend/SebarandiKapanewon_0_0.png" /> Kapanewon Galur<br />\
    <img src="styles/legend/SebarandiKapanewon_0_1.png" /> Kapanewon Girimulyo<br />\
    <img src="styles/legend/SebarandiKapanewon_0_2.png" /> Kapanewon Kalibawang<br />\
    <img src="styles/legend/SebarandiKapanewon_0_3.png" /> Kapanewon Kokap<br />\
    <img src="styles/legend/SebarandiKapanewon_0_4.png" /> Kapanewon Lendah<br />\
    <img src="styles/legend/SebarandiKapanewon_0_5.png" /> Kapanewon Nanggulan<br />\
    <img src="styles/legend/SebarandiKapanewon_0_6.png" /> Kapanewon Panjatan<br />\
    <img src="styles/legend/SebarandiKapanewon_0_7.png" /> Kapanewon Pengasih<br />\
    <img src="styles/legend/SebarandiKapanewon_0_8.png" /> Kapanewon Samigaluh<br />\
    <img src="styles/legend/SebarandiKapanewon_0_9.png" /> Kapanewon Sentolo<br />\
    <img src="styles/legend/SebarandiKapanewon_0_10.png" /> Kapanewon Temon<br />\
    <img src="styles/legend/SebarandiKapanewon_0_11.png" /> Kapanewon Wates<br />' });
var format_SebaranSatuanPendidikan_1 = new ol.format.GeoJSON();
var features_SebaranSatuanPendidikan_1 = format_SebaranSatuanPendidikan_1.readFeatures(json_SebaranSatuanPendidikan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SebaranSatuanPendidikan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SebaranSatuanPendidikan_1.addFeatures(features_SebaranSatuanPendidikan_1);
var lyr_SebaranSatuanPendidikan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SebaranSatuanPendidikan_1, 
                style: style_SebaranSatuanPendidikan_1,
                popuplayertitle: 'Sebaran Satuan Pendidikan',
                interactive: true,
    title: 'Sebaran Satuan Pendidikan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_0.png" /> Banaran<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_1.png" /> Banguncipto<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_2.png" /> Banjararum<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_3.png" /> Banjarasri<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_4.png" /> Banjarharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_5.png" /> Banjaroyo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_6.png" /> Banjarsari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_7.png" /> Banyuroto<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_8.png" /> Bendungan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_9.png" /> Bojong<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_10.png" /> Brosot<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_11.png" /> Bugel<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_12.png" /> Bumirejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_13.png" /> Cerme<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_14.png" /> Demangrejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_15.png" /> Demen<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_16.png" /> Depok<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_17.png" /> Donomulyo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_18.png" /> Garongan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_19.png" /> Gerbosari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_20.png" /> Giripeni<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_21.png" /> Giripurwo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_22.png" /> Glagah<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_23.png" /> Gotakan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_24.png" /> Gulurejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_25.png" /> Hargomulyo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_26.png" /> Hargorejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_27.png" /> Hargotirto<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_28.png" /> Hargowilis<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_29.png" /> Jangkaran<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_30.png" /> Janten<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_31.png" /> Jatimulyo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_32.png" /> Jatirejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_33.png" /> Jatisarono<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_34.png" /> Kaliagung<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_35.png" /> Kalidengen<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_36.png" /> Kaligintung<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_37.png" /> Kalirejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_38.png" /> Kanoman<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_39.png" /> Karangsari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_40.png" /> Karangsewu<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_41.png" /> Karangwuluh<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_42.png" /> Karangwuni<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_43.png" /> Kebonharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_44.png" /> Kebonrejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_45.png" /> Kedundang<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_46.png" /> Kedungsari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_47.png" /> Kembang<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_48.png" /> Kranggan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_49.png" /> Krembangan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_50.png" /> Kulur<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_51.png" /> Kulwaru<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_52.png" /> Margosari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_53.png" /> Ngargosari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_54.png" /> Ngentakrejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_55.png" /> Ngestiharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_56.png" /> Nomporejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_57.png" /> Pagerharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_58.png" /> Palihan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_59.png" /> Pandowan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_60.png" /> Panjatan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_61.png" /> Pendoworejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_62.png" /> Pengasih<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_63.png" /> Pleret<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_64.png" /> Plumbon<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_65.png" /> Purwoharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_66.png" /> Purwosari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_67.png" /> Salamrejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_68.png" /> Sendangsari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_69.png" /> Sentolo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_70.png" /> Sidoharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_71.png" /> Sidomulyo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_72.png" /> Sidorejo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_73.png" /> Sindutan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_74.png" /> Sogan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_75.png" /> Srikayangan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_76.png" /> Sukoreno<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_77.png" /> Tanjungharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_78.png" /> Tawangsari<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_79.png" /> Tayuban<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_80.png" /> Temon Kulon<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_81.png" /> Temon Wetan<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_82.png" /> Tirtorahayu<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_83.png" /> Triharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_84.png" /> Tuksono<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_85.png" /> Wahyuharjo<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_86.png" /> Wates<br />\
    <img src="styles/legend/SebaranSatuanPendidikan_1_87.png" /> Wijimulyo<br />' });

lyr_SebarandiKapanewon_0.setVisible(true);lyr_SebaranSatuanPendidikan_1.setVisible(true);
var layersList = [lyr_SebarandiKapanewon_0,lyr_SebaranSatuanPendidikan_1];
lyr_SebarandiKapanewon_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'KAB': 'KAB', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'luas': 'luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Jumlah SP__TK': 'Jumlah SP__TK', 'Jumlah SP__SD': 'Jumlah SP__SD', 'Jumlah SP__SMP': 'Jumlah SP__SMP', });
lyr_SebaranSatuanPendidikan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Jumlah Satuan Pendidikan_TK': 'Jumlah Satuan Pendidikan_TK', 'Jumlah Satuan Pendidikan_SD': 'Jumlah Satuan Pendidikan_SD', 'Jumlah Satuan Pendidikan_SMP': 'Jumlah Satuan Pendidikan_SMP', });
lyr_SebarandiKapanewon_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'KAB': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Jumlah SP__TK': 'Range', 'Jumlah SP__SD': 'Range', 'Jumlah SP__SMP': 'Range', });
lyr_SebaranSatuanPendidikan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Jumlah Satuan Pendidikan_TK': 'Range', 'Jumlah Satuan Pendidikan_SD': 'Range', 'Jumlah Satuan Pendidikan_SMP': 'Range', });
lyr_SebarandiKapanewon_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROV': 'hidden field', 'KAB': 'hidden field', 'KECAMATAN': 'no label', 'SUMBER': 'hidden field', 'luas': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Jumlah SP__TK': 'inline label - always visible', 'Jumlah SP__SD': 'inline label - visible with data', 'Jumlah SP__SMP': 'inline label - visible with data', });
lyr_SebaranSatuanPendidikan_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'Jumlah Satuan Pendidikan_TK': 'inline label - always visible', 'Jumlah Satuan Pendidikan_SD': 'inline label - always visible', 'Jumlah Satuan Pendidikan_SMP': 'inline label - always visible', });
lyr_SebaranSatuanPendidikan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'darken';
});