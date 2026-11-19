var wms_layers = [];

var format_Totalbersekolahdi_0 = new ol.format.GeoJSON();
var features_Totalbersekolahdi_0 = format_Totalbersekolahdi_0.readFeatures(json_Totalbersekolahdi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Totalbersekolahdi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Totalbersekolahdi_0.addFeatures(features_Totalbersekolahdi_0);
var lyr_Totalbersekolahdi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Totalbersekolahdi_0, 
                style: style_Totalbersekolahdi_0,
                popuplayertitle: 'Total bersekolah di',
                interactive: true,
                title: '<img src="styles/legend/Totalbersekolahdi_0.png" /> Total bersekolah di'
            });
var format_Bersekolahdi_1 = new ol.format.GeoJSON();
var features_Bersekolahdi_1 = format_Bersekolahdi_1.readFeatures(json_Bersekolahdi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bersekolahdi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bersekolahdi_1.addFeatures(features_Bersekolahdi_1);
var lyr_Bersekolahdi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bersekolahdi_1, 
                style: style_Bersekolahdi_1,
                popuplayertitle: 'Bersekolah di',
                interactive: true,
    title: 'Bersekolah di<br />\
    <img src="styles/legend/Bersekolahdi_1_0.png" /> Banaran<br />\
    <img src="styles/legend/Bersekolahdi_1_1.png" /> Banguncipto<br />\
    <img src="styles/legend/Bersekolahdi_1_2.png" /> Banjararum<br />\
    <img src="styles/legend/Bersekolahdi_1_3.png" /> Banjarasri<br />\
    <img src="styles/legend/Bersekolahdi_1_4.png" /> Banjarharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_5.png" /> Banjaroyo<br />\
    <img src="styles/legend/Bersekolahdi_1_6.png" /> Banjarsari<br />\
    <img src="styles/legend/Bersekolahdi_1_7.png" /> Banyuroto<br />\
    <img src="styles/legend/Bersekolahdi_1_8.png" /> Bendungan<br />\
    <img src="styles/legend/Bersekolahdi_1_9.png" /> Bojong<br />\
    <img src="styles/legend/Bersekolahdi_1_10.png" /> Brosot<br />\
    <img src="styles/legend/Bersekolahdi_1_11.png" /> Bugel<br />\
    <img src="styles/legend/Bersekolahdi_1_12.png" /> Bumirejo<br />\
    <img src="styles/legend/Bersekolahdi_1_13.png" /> Cerme<br />\
    <img src="styles/legend/Bersekolahdi_1_14.png" /> Demangrejo<br />\
    <img src="styles/legend/Bersekolahdi_1_15.png" /> Demen<br />\
    <img src="styles/legend/Bersekolahdi_1_16.png" /> Depok<br />\
    <img src="styles/legend/Bersekolahdi_1_17.png" /> Donomulyo<br />\
    <img src="styles/legend/Bersekolahdi_1_18.png" /> Garongan<br />\
    <img src="styles/legend/Bersekolahdi_1_19.png" /> Gerbosari<br />\
    <img src="styles/legend/Bersekolahdi_1_20.png" /> Giripeni<br />\
    <img src="styles/legend/Bersekolahdi_1_21.png" /> Giripurwo<br />\
    <img src="styles/legend/Bersekolahdi_1_22.png" /> Glagah<br />\
    <img src="styles/legend/Bersekolahdi_1_23.png" /> Gotakan<br />\
    <img src="styles/legend/Bersekolahdi_1_24.png" /> Gulurejo<br />\
    <img src="styles/legend/Bersekolahdi_1_25.png" /> Hargomulyo<br />\
    <img src="styles/legend/Bersekolahdi_1_26.png" /> Hargorejo<br />\
    <img src="styles/legend/Bersekolahdi_1_27.png" /> Hargotirto<br />\
    <img src="styles/legend/Bersekolahdi_1_28.png" /> Hargowilis<br />\
    <img src="styles/legend/Bersekolahdi_1_29.png" /> Jangkaran<br />\
    <img src="styles/legend/Bersekolahdi_1_30.png" /> Janten<br />\
    <img src="styles/legend/Bersekolahdi_1_31.png" /> Jatimulyo<br />\
    <img src="styles/legend/Bersekolahdi_1_32.png" /> Jatirejo<br />\
    <img src="styles/legend/Bersekolahdi_1_33.png" /> Jatisarono<br />\
    <img src="styles/legend/Bersekolahdi_1_34.png" /> Kaliagung<br />\
    <img src="styles/legend/Bersekolahdi_1_35.png" /> Kalidengen<br />\
    <img src="styles/legend/Bersekolahdi_1_36.png" /> Kaligintung<br />\
    <img src="styles/legend/Bersekolahdi_1_37.png" /> Kalirejo<br />\
    <img src="styles/legend/Bersekolahdi_1_38.png" /> Kanoman<br />\
    <img src="styles/legend/Bersekolahdi_1_39.png" /> Karangsari<br />\
    <img src="styles/legend/Bersekolahdi_1_40.png" /> Karangsewu<br />\
    <img src="styles/legend/Bersekolahdi_1_41.png" /> Karangwuluh<br />\
    <img src="styles/legend/Bersekolahdi_1_42.png" /> Karangwuni<br />\
    <img src="styles/legend/Bersekolahdi_1_43.png" /> Kebonharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_44.png" /> Kebonrejo<br />\
    <img src="styles/legend/Bersekolahdi_1_45.png" /> Kedundang<br />\
    <img src="styles/legend/Bersekolahdi_1_46.png" /> Kedungsari<br />\
    <img src="styles/legend/Bersekolahdi_1_47.png" /> Kembang<br />\
    <img src="styles/legend/Bersekolahdi_1_48.png" /> Kranggan<br />\
    <img src="styles/legend/Bersekolahdi_1_49.png" /> Krembangan<br />\
    <img src="styles/legend/Bersekolahdi_1_50.png" /> Kulur<br />\
    <img src="styles/legend/Bersekolahdi_1_51.png" /> Kulwaru<br />\
    <img src="styles/legend/Bersekolahdi_1_52.png" /> Margosari<br />\
    <img src="styles/legend/Bersekolahdi_1_53.png" /> Ngargosari<br />\
    <img src="styles/legend/Bersekolahdi_1_54.png" /> Ngentakrejo<br />\
    <img src="styles/legend/Bersekolahdi_1_55.png" /> Ngestiharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_56.png" /> Nomporejo<br />\
    <img src="styles/legend/Bersekolahdi_1_57.png" /> Pagerharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_58.png" /> Palihan<br />\
    <img src="styles/legend/Bersekolahdi_1_59.png" /> Pandowan<br />\
    <img src="styles/legend/Bersekolahdi_1_60.png" /> Panjatan<br />\
    <img src="styles/legend/Bersekolahdi_1_61.png" /> Pendoworejo<br />\
    <img src="styles/legend/Bersekolahdi_1_62.png" /> Pengasih<br />\
    <img src="styles/legend/Bersekolahdi_1_63.png" /> Pleret<br />\
    <img src="styles/legend/Bersekolahdi_1_64.png" /> Plumbon<br />\
    <img src="styles/legend/Bersekolahdi_1_65.png" /> Purwoharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_66.png" /> Purwosari<br />\
    <img src="styles/legend/Bersekolahdi_1_67.png" /> Salamrejo<br />\
    <img src="styles/legend/Bersekolahdi_1_68.png" /> Sendangsari<br />\
    <img src="styles/legend/Bersekolahdi_1_69.png" /> Sentolo<br />\
    <img src="styles/legend/Bersekolahdi_1_70.png" /> Sidoharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_71.png" /> Sidomulyo<br />\
    <img src="styles/legend/Bersekolahdi_1_72.png" /> Sidorejo<br />\
    <img src="styles/legend/Bersekolahdi_1_73.png" /> Sindutan<br />\
    <img src="styles/legend/Bersekolahdi_1_74.png" /> Sogan<br />\
    <img src="styles/legend/Bersekolahdi_1_75.png" /> Srikayangan<br />\
    <img src="styles/legend/Bersekolahdi_1_76.png" /> Sukoreno<br />\
    <img src="styles/legend/Bersekolahdi_1_77.png" /> Tanjungharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_78.png" /> Tawangsari<br />\
    <img src="styles/legend/Bersekolahdi_1_79.png" /> Tayuban<br />\
    <img src="styles/legend/Bersekolahdi_1_80.png" /> Temon Kulon<br />\
    <img src="styles/legend/Bersekolahdi_1_81.png" /> Temon Wetan<br />\
    <img src="styles/legend/Bersekolahdi_1_82.png" /> Tirtorahayu<br />\
    <img src="styles/legend/Bersekolahdi_1_83.png" /> Triharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_84.png" /> Tuksono<br />\
    <img src="styles/legend/Bersekolahdi_1_85.png" /> Wahyuharjo<br />\
    <img src="styles/legend/Bersekolahdi_1_86.png" /> Wates<br />\
    <img src="styles/legend/Bersekolahdi_1_87.png" /> Wijimulyo<br />' });

lyr_Totalbersekolahdi_0.setVisible(true);lyr_Bersekolahdi_1.setVisible(true);
var layersList = [lyr_Totalbersekolahdi_0,lyr_Bersekolahdi_1];
lyr_Totalbersekolahdi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROV': 'PROV', 'KAB': 'KAB', 'KECAMATAN': 'KECAMATAN', 'SUMBER': 'SUMBER', 'luas': 'luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', '1.1_Jumlah_Siswa_TK': '1.1_Jumlah_Siswa_TK', '1.1_Jumlah_Siswa_SD': '1.1_Jumlah_Siswa_SD', '1.1_Jumlah_Siswa_SMP': '1.1_Jumlah_Siswa_SMP', });
lyr_Bersekolahdi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', '1.2_Jumlah_Siswa_TK': '1.2_Jumlah_Siswa_TK', '1.2_Jumlah_Siswa_SD': '1.2_Jumlah_Siswa_SD', '1.2_Jumlah_Siswa_SMP': '1.2_Jumlah_Siswa_SMP', });
lyr_Totalbersekolahdi_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROV': 'TextEdit', 'KAB': 'TextEdit', 'KECAMATAN': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', '1.1_Jumlah_Siswa_TK': 'TextEdit', '1.1_Jumlah_Siswa_SD': 'TextEdit', '1.1_Jumlah_Siswa_SMP': 'TextEdit', });
lyr_Bersekolahdi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', '1.2_Jumlah_Siswa_TK': 'TextEdit', '1.2_Jumlah_Siswa_SD': 'TextEdit', '1.2_Jumlah_Siswa_SMP': 'TextEdit', });
lyr_Totalbersekolahdi_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROV': 'hidden field', 'KAB': 'hidden field', 'KECAMATAN': 'no label', 'SUMBER': 'hidden field', 'luas': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', '1.1_Jumlah_Siswa_TK': 'inline label - always visible', '1.1_Jumlah_Siswa_SD': 'inline label - always visible', '1.1_Jumlah_Siswa_SMP': 'inline label - always visible', });
lyr_Bersekolahdi_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'no label', 'WADMKC': 'no label', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', '1.2_Jumlah_Siswa_TK': 'inline label - always visible', '1.2_Jumlah_Siswa_SD': 'inline label - always visible', '1.2_Jumlah_Siswa_SMP': 'inline label - always visible', });
lyr_Bersekolahdi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});