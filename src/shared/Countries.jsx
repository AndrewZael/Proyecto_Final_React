const Countries = [
    { label: 'Afganistán', name: 'afganistan' },
    { label: 'Albania', name: 'albania' },
    { label: 'Alemania', name: 'alemania' },
    { label: 'Andorra', name: 'andorra' },
    { label: 'Angola', name: 'angola' },
    { label: 'Antigua y Barbuda', name: 'antigua-y-barbuda' },
    { label: 'Arabia Saudita', name: 'arabia-saudita' },
    { label: 'Argelia', name: 'argelia' },
    { label: 'Argentina', name: 'argentina' },
    { label: 'Armenia', name: 'armenia' },
    { label: 'Australia', name: 'australia' },
    { label: 'Austria', name: 'austria' },
    { label: 'Azerbaiyán', name: 'azerbaiyan' },
    { label: 'Bahamas', name: 'bahamas' },
    { label: 'Bangladés', name: 'banglades' },
    { label: 'Barbados', name: 'barbados' },
    { label: 'Baréin', name: 'barein' },
    { label: 'Bélgica', name: 'belgica' },
    { label: 'Belice', name: 'belice' },
    { label: 'Benín', name: 'benin' },
    { label: 'Bielorrusia', name: 'bielorrusia' },
    { label: 'Birmania', name: 'birmania' },
    { label: 'Bolivia', name: 'bolivia' },
    { label: 'Bosnia y Herzegovina', name: 'bosnia-y-herzegovina' },
    { label: 'Botsuana', name: 'botsuana' },
    { label: 'Brasil', name: 'brasil' },
    { label: 'Brunéi', name: 'brunei' },
    { label: 'Bulgaria', name: 'bulgaria' },
    { label: 'Burkina Faso', name: 'burkina-faso' },
    { label: 'Burundi', name: 'burundi' },
    { label: 'Bután', name: 'butan' },
    { label: 'Cabo Verde', name: 'cabo-verde' },
    { label: 'Camboya', name: 'camboya' },
    { label: 'Camerún', name: 'camerun' },
    { label: 'Canadá', name: 'canada' },
    { label: 'Catar', name: 'catar' },
    { label: 'Chad', name: 'chad' },
    { label: 'Chile', name: 'chile' },
    { label: 'China', name: 'china' },
    { label: 'Chipre', name: 'chipre' },
    { label: 'Ciudad del Vaticano', name: 'ciudad-del-vaticano' },
    { label: 'Colombia', name: 'colombia' },
    { label: 'Comoras', name: 'comoras' },
    { label: 'Corea del Norte', name: 'corea-del-norte' },
  { label: 'Corea del Sur', name: 'corea-del-sur' },
  { label: 'Costa de Marfil', name: 'costa-de-marfil' },
  { label: 'Costa Rica', name: 'costa-rica' },
  { label: 'Croacia', name: 'croacia' },
  { label: 'Cuba', name: 'cuba' },
  { label: 'Dinamarca', name: 'dinamarca' },
  { label: 'Dominica', name: 'dominica' },
  { label: 'Ecuador', name: 'ecuador' },
  { label: 'Egipto', name: 'egipto' },
  { label: 'El Salvador', name: 'el-salvador' },
  { label: 'Emiratos Árabes Unidos', name: 'emiratos-arabes-unidos' },
  { label: 'Eritrea', name: 'eritrea' },
  { label: 'Eslovaquia', name: 'eslovaquia' },
  { label: 'Eslovenia', name: 'eslovenia' },
  { label: 'España', name: 'espana' },
  { label: 'Estados Unidos', name: 'estados-unidos' },
  { label: 'Estonia', name: 'estonia' },
  { label: 'Etiopía', name: 'etiopia' },
  { label: 'Filipinas', name: 'filipinas' },
  { label: 'Finlandia', name: 'finlandia' },
  { label: 'Fiyi', name: 'fiyi' },
  { label: 'Francia', name: 'francia' },
  { label: 'Gabón', name: 'gabon' },
  { label: 'Gambia', name: 'gambia' },
  { label: 'Georgia', name: 'georgia' },
  { label: 'Ghana', name: 'ghana' },
  { label: 'Granada', name: 'granada' },
  { label: 'Grecia', name: 'grecia' },
  { label: 'Guatemala', name: 'guatemala' },
  { label: 'Guinea', name: 'guinea' },
  { label: 'Guinea-Bissau', name: 'guinea-bissau' },
  { label: 'Guinea Ecuatorial', name: 'guinea-ecuatorial' },
  { label: 'Guyana', name: 'guyana' },
  { label: 'Haití', name: 'haiti' },
  { label: 'Honduras', name: 'honduras' },
  { label: 'Hungría', name: 'hungria' },
  { label: 'India', name: 'india' },
  { label: 'Indonesia', name: 'indonesia' },
  { label: 'Irak', name: 'irak' },
  { label: 'Irán', name: 'iran' },
  { label: 'Irlanda', name: 'irlanda' },
  { label: 'Islandia', name: 'islandia' },
  { label: 'Islas Faroe', name: 'islasfaroe' },
  { label: 'Islas Marshall', name: 'islasmarshall' },
  { label: 'Islas Salomón', name: 'islassalomon' },
  { label: 'Israel', name: 'israel' },
  { label: 'Italia', name: 'italia' },
  { label: 'Jamaica', name: 'jamaica' },
  { label: 'Japón', name: 'japon' },
  { label: 'Jordania', name: 'jordania' },
  { label: 'Kazajistán', name: 'kazajistan' },
  { label: 'Kenia', name: 'kenia' },
  { label: 'Kirguistán', name: 'kirguistan' },
  { label: 'Kiribati', name: 'kiribati' },
  { label: 'Kuwait', name: 'kuwait' },
  { label: 'Laos', name: 'laos' },
  { label: 'Lesoto', name: 'lesoto' },
  { label: 'Letonia', name: 'letonia' },
  { label: 'Líbano', name: 'libano' },
  { label: 'Liberia', name: 'liberia' },
  { label: 'Libia', name: 'libia' },
  { label: 'Liechtenstein', name: 'liechtenstein' },
  { label: 'Lituania', name: 'lituania' },
  { label: 'Luxemburgo', name: 'luxemburgo' },
  { label: 'Macedonia del Norte', name: 'macedoniadelnorte' },
  { label: 'Madagascar', name: 'madagascar' },
  { label: 'Malasia', name: 'malasia' },
  { label: 'Malaui', name: 'malaui' },
  { label: 'Maldivas', name: 'maldivas' },
  { label: 'Malí', name: 'mali' },
  { label: 'Malta', name: 'malta' },
  { label: 'Marruecos', name: 'marruecos' },
  { label: 'Mauricio', name: 'mauricio' },
  { label: 'Mauritania', name: 'mauritania' },
  { label: 'México', name: 'mexico' },
  { label: 'Micronesia', name: 'micronesia' },
  { label: 'Moldavia', name: 'moldavia' },
  { label: 'Mónaco', name: 'monaco' },
  { label: 'Mongolia', name: 'mongolia' },
  { label: 'Montenegro', name: 'montenegro' },
  { label: 'Mozambique', name: 'mozambique' },
  { label: 'Myanmar', name: 'myanmar' },
  { label: 'Namibia', name: 'namibia' },
  { label: 'Nauru', name: 'nauru' },
  { label: 'Nepal', name: 'nepal' },
  { label: 'Nicaragua', name: 'nicaragua' },
  { label: 'Níger', name: 'niger' },
  { label: 'Nigeria', name: 'nigeria' },
  { label: 'Niue', name: 'niue' },
  { label: 'Norfolk', name: 'norfolk' },
  { label: 'Noruega', name: 'noruega' },
  { label: 'Nueva Caledonia', name: 'nueva caledonia' },
  { label: 'Nueva Zelanda', name: 'nueva zelanda' },
  { label: 'Omán', name: 'oman' },
  { label: 'Países Bajos', name: 'paises bajos' },
  { label: 'Pakistán', name: 'pakistan' },
  { label: 'Palaos', name: 'palaos' },
  { label: 'Palestina', name: 'palestina' },
  { label: 'Panamá', name: 'panama' },
  { label: 'Papúa Nueva Guinea', name: 'papua nueva guinea' },
  { label: 'Paraguay', name: 'paraguay' },
  { label: 'Perú', name: 'peru' },
  { label: 'Pitcairn', name: 'pitcairn' },
  { label: 'Polinesia Francesa', name: 'polinesia francesa' },
  { label: 'Polonia', name: 'polonia' },
  { label: 'Portugal', name: 'portugal' },
  { label: 'Puerto Rico', name: 'puerto rico' },
  { label: 'Qatar', name: 'qatar' },
  { label: 'Reino Unido', name: 'reino unido' },
  { label: 'República Centroafricana', name: 'republica centroafricana' },
  { label: 'República Checa', name: 'republica checa' },
  { label: 'República del Congo', name: 'republica del congo' },
  { label: 'República Democrática del Congo', name: 'republica democratica del congo' },
  { label: 'República Dominicana', name: 'republica dominicana' },
  { label: 'Reunión', name: 'reunion' },
  { label: 'Ruanda', name: 'ruanda' },
  { label: 'Rumania', name: 'rumania' },
  { label: 'Rusia', name: 'rusia' },
  { label: 'Sahara Occidental', name: 'sahara occidental' },
  { label: 'Samoa', name: 'samoa' },
  { label: 'Samoa Americana', name: 'samoa americana' },
  { label: 'San Bartolomé', name: 'san bartolome' },
  { label: 'San Cristóbal y Nieves', name: 'san cristobal y nieves' },
  { label: 'San Marino', name: 'san marino' },
  { label: 'San Martín', name: 'san martin' },
  { label: "San Pedro y Miquelón", name: "sanpedroy_miquelon" },
  { label: "San Vicente y las Granadinas", name: "sanvicenteylasgranadinas" },
  { label: "Santa Elena", name: "santaelena" },
  { label: "Santa Lucía", name: "santalucia" },
  { label: "Santo Tomé y Príncipe", name: "santomeyprincipe" },
  { label: "Senegal", name: "senegal" },
  { label: "Serbia", name: "serbia" },
  { label: "Seychelles", name: "seychelles" },
  { label: "Sierra Leona", name: "sierraleona" },
  { label: "Singapur", name: "singapur" },
  { label: "Siria", name: "siria" },
  { label: "Somalia", name: "somalia" },
  { label: "Sri Lanka", name: "srilanka" },
  { label: "Suazilandia", name: "suazilandia" },
  { label: "Sudáfrica", name: "sudafrica" },
  { label: "Sudán", name: "sudan" },
  { label: "Sudán del Sur", name: "sudandelsur" },
  { label: "Suecia", name: "suecia" },
  { label: "Suiza", name: "suiza" },
  { label: "Surinam", name: "surinam" },
  { label: "Tailandia", name: "tailandia" },
  { label: "Taiwán", name: "taiwan" },
  { label: "Tanzania", name: "tanzania" },
  { label: "Tayikistán", name: "tayikistan" },
  { label: "Timor Oriental", name: "timororiental" },
  { label: "Togo", name: "togo" },
  { label: "Tokelau", name: "tokelau" },
  { label: "Tonga", name: "tonga" },
  { label: "Trinidad y Tobago", name: "trinidadytobago" },
  { label: "Túnez", name: "tunez" },
  { label: "Turkmenistán", name: "turkmenistan" },
  { label: "Turquía", name: "turquia" },
  { label: "Tuvalu", name: "tuvalu" },
  { label: "Ucrania", name: "ucrania" },
  { label: "Uganda", name: "uganda" },
  { label: "Uruguay", name: "uruguay" },
  { label: "Uzbekistán", name: "uzbekistan" },
  { label: "Vanuatu", name: "vanuatu" },
  { label: "Venezuela", name: "venezuela" },
  { label: "Vietnam", name: "vietnam" },
  { label: "Wallis y Futuna", name: "wallisyfutuna" },
  { label: 'Yemen', name: 'yemen' },
  { label: 'Zambia', name: 'zambia' },
  { label: 'Zimbabwe', name: 'zimbabwe' }
]
export default Countries;