
setMap = (cityName, embedUrl) => {
    console.log(1)
    document.getElementById('mapTitle').innerText = cityName
    document.getElementById('mapDiv').innerHTML = '<iframe src="' + embedUrl + '" class="iframeMap" allowfullscreen="" loading="lazy"></iframe>'

    window.scrollTo({
        top: 440,
        behavior: 'smooth'
    })
}
setMapEmpty = (cityName) => {
    document.getElementById('mapTitle').innerText = cityName
    document.getElementById('mapDiv').innerHTML = '<div class="divNoMap">No hay ningún Goiko en esta ciudad</div>'

    window.scrollTo({
        top: 440,
        behavior: 'smooth'
    })
}

setMapACoruna = () => {
    setMap('A Coruña', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5801.376980080112!2d-8.407845401411672!3d43.3626262113046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd2e7c84f476d1c1%3A0x96d1086f49198f5a!2sAvenida%20Primo%20de%20Rivera%208%20a%20coru%C3%B1a!3m2!1d43.359616599999995!2d-8.403596199999999!4m5!1s0xd2e7ddb53dadf21%3A0xbdf33bd8f5883065!2sGoiko%2C%20Av.%20Rubine%2C%2011%2C%2015004%20A%20Coru%C3%B1a!3m2!1d43.3677427!2d-8.4091434!5e0!3m2!1ses!2ses!4v1613909329944!5m2!1ses!2ses')
}
setMapAlmaden = () => {
    setMapEmpty('Almadén')
}
setMapBarcelona = () => {
    setMap('Barcelona', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1496.6352436644456!2d2.1720922082926806!3d41.38993185708307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x12a4a2f1ad086679%3A0x2639f111865034eb!2sRonda%20Sant%20Pere%2C%2017%2C%20Barcelona!3m2!1d41.3889425!2d2.1718355!4m5!1s0x12a4a38c0f810463%3A0xc237f9bf5521df73!2sGoiko%2C%20Carrer%20del%20Bruc%2C%2025%2C%2008010%20Barcelona!3m2!1d41.3909856!2d2.1738203!5e0!3m2!1ses!2ses!4v1613909487841!5m2!1ses!2ses')
}
setMapBilbao = () => {
    setMap('Bilbao', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1452.684337856758!2d-2.943517766370791!3d43.264651528494475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd4e5025c67c2575%3A0xa1f457979f6991ee!2sGran%20V%C3%ADa%20de%20Don%20Diego%20L%C3%B3pez%20de%20Haro%2C%2081%2C%2048009%20Bilbao%2C%20Vizcaya!3m2!1d43.2644714!2d-2.9434285!4m5!1s0x0%3A0xe4f7d2ab50881b24!2sGoiko!3m2!1d43.2647554!2d-2.9420593999999998!5e0!3m2!1ses!2ses!4v1613936312243!5m2!1ses!2ses')
}
setMapLleida = () => {
    setMapEmpty('Lleida')
}
setMapMadrid = () => {
    setMap('Madrid', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2146.93150231091!2d-3.654099340577476!3d40.44827524622931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd422f2e65166a95%3A0x3956668ebf8f0276!2sCalle%20Torrelaguna%2C%2077%2C%20Madrid!3m2!1d40.4468739!2d-3.6565412999999998!4m5!1s0xd422f25deff52ff%3A0xa00a2269df15d771!2sGoiko%2C%20Calle%20de%20Arturo%20Soria%2C%20Madrid!3m2!1d40.450133099999995!2d-3.6506814!5e0!3m2!1ses!2ses!4v1613909672543!5m2!1ses!2ses')
}
setMapOviedo = () => {
    setMap('Oviedo', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2900.6912647073746!2d-5.8458517342292105!3d43.362568179192806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd368cedfec1e311%3A0x87bcf037e8d04d8f!2sCalle%20Azc%C3%A1rraga%2C%2026%2C%20Oviedo!3m2!1d43.363490999999996!2d-5.8401229!4m5!1s0xd368de09de579d1%3A0x17fa46de147832dc!2sGoiko%2C%20Calle%20San%20Francisco%2C%2013%2C%2033003%20Oviedo%2C%20Asturias!3m2!1d43.3618561!2d-5.8471777!5e0!3m2!1ses!2ses!4v1613909764721!5m2!1ses!2ses')
}
setMapSevilla = () => {
    setMap('Sevilla', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6340.902691608854!2d-5.976901072548957!3d37.37915709486227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd126e70c1ad76cf%3A0x2e979cbd39dd2085!2sStratesys%20Technology%20Solutions%20S%20L%2C%20Avenida%20Diego%20Mart%C3%ADnez%20Barrio%204%20Edificio%20Viapol%20Center%2C%2041013%20Sevilla!3m2!1d37.3755253!2d-5.975982999999999!4m5!1s0xd126f927a8baa63%3A0x7ca5b1826a1f34d7!2sGoiko%2C%20Av.%20Eduardo%20Dato%2C%2079%2C%2041005%20Sevilla!3m2!1d37.3824501!2d-5.9695744!5e0!3m2!1ses-419!2ses!4v1678222999727!5m2!1ses-419!2ses')
}
setMapValencia = () => {
    setMap('Valencia', 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3080.036061783221!2d-0.3662333343136167!3d39.468514020681305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0xd6048ca00ee4221%3A0x55e20ce038a5c409!2sStratesys%2C%20Carrer%20del%20Comte%20d&#39;Altea%2C%201%2C%2046005%20Valencia!3m2!1d39.4651576!2d-0.37038309999999997!4m5!1s0xd6048bdda8bcca9%3A0xb7f476981bfc73fb!2sGoiko%2C%20Av.%20d&#39;Arag%C3%B3%2C%2026%2C%2046021%20Valencia!3m2!1d39.470946!2d-0.3577241!5e0!3m2!1ses!2ses!4v1680694564656!5m2!1ses!2ses')
}


