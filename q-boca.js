// Banco: Boca. Em cada questão a PRIMEIRA alternativa é a correta (o app embaralha).
(function(){
var T = "Boca";
function add(id, e, alts, m){
  window.QUESTOES.push({ id:id, tema:T, enunciado:e, macete:m,
    alternativas: alts.map(function(a,i){ return { t:a[0], porque:a[1], ok:i===0 }; }) });
}

add("B001","O vestíbulo bucal corresponde ao espaço situado entre:",[
 ["Lábios/bochechas e dentes/gengivas","Correta. É a região mais externa da boca, com parede anterior labial e posterior gengival."],
 ["Dentes e pilar anterior do palato","Esse é o limite da cavidade oral propriamente dita, não do vestíbulo."],
 ["Palato duro e palato mole","Palato duro e mole formam o teto da cavidade oral."],
 ["Língua e assoalho da boca","Língua e assoalho fazem parte da cavidade oral, não do vestíbulo."],
 ["Pilar anterior e pilar posterior","Entre os pilares fica a fossa tonsilar, já na orofaringe."]
],"Vestíbulo = \"varanda\" da boca: fica do lado de fora dos dentes.");

add("B002","Qual estrutura marca o limite posterior da cavidade oral?",[
 ["Pilar anterior do palato","Correta. O pilar anterior separa a boca da faringe."],
 ["Papila do ducto parotídeo","A papila parotídea fica na bochecha, lateralmente, e não é limite posterior."],
 ["Arcada dentária e gengivas","Dentes e gengivas são o limite anterior da cavidade oral."],
 ["Pilar posterior do palato","O pilar posterior já fica atrás da tonsila, dentro da orofaringe."],
 ["Base da língua e valécula","Base da língua e valécula pertencem à orofaringe."]
],"Anterior = dentes; posterior = pilar ANTERIOR (o primeiro que você vê).");

add("B003","Da glândula parótida, o que se visualiza ao exame da cavidade oral?",[
 ["Apenas o óstio, na papila do ducto","Correta. Da parótida só se vê o óstio do ducto, na mucosa jugal."],
 ["O lobo superficial na mucosa jugal","O parênquima da parótida não é visível pela boca."],
 ["O lobo profundo no palato mole","O lobo profundo não é visível na oroscopia."],
 ["O óstio no assoalho, junto ao frênulo","No assoalho desembocam as submandibulares, não a parótida."],
 ["Glândula inteira atrás do pilar","A parótida não se projeta para a orofaringe ao exame."]
],"Parótida na boca = só a \"portinha\" (papila) na bochecha.");

add("B004","Quais são os cinco gostos primários?",[
 ["Doce, salgado, azedo, amargo e umami","Correta. São os cinco gostos primários captados pelas papilas."],
 ["Doce, salgado, azedo, amargo e picante","Picante é dor/irritação química captada pelo trigêmeo, não gosto."],
 ["Doce, salgado, ácido, metálico e umami","Metálico não é gosto primário."],
 ["Doce, salgado, amargo, frescor e umami","Frescor (hortelã) é estímulo somatossensorial do trigêmeo."],
 ["Doce, azedo, amargo, gorduroso e umami","Gorduroso não está entre os gostos primários citados."]
],"Picante e frescor = trigêmeo. Gosto primário só tem 5: DSAAU.");

add("B005","As papilas circunvaladas localizam-se e relacionam-se principalmente a:",[
 ["Parte posterior da língua em V; amargo","Correta. Formam o V posterior e concentram receptores do amargo."],
 ["Corpo da língua; textura e tato","Essas são as filiformes, que não têm botões gustativos."],
 ["Laterais posteriores; sabor azedo","Essas são as foliáceas."],
 ["Ponta da língua; doce e salgado","Essas são as fungiformes, na parte anterior."],
 ["Dorso médio; sabor umami isolado","Não há papila exclusiva do umami na descrição do material."]
],"CircunVaLadas fazem o V lá atrás, onde o amargo dá ânsia.");

add("B006","Qual tipo de papila NÃO contém botões gustativos?",[
 ["Filiformes","Correta. Ajudam só na percepção de textura e sensibilidade tátil."],
 ["Fungiformes","Contêm botões gustativos, ligados a doce e salgado."],
 ["Foliáceas","Contêm botões gustativos, ligados ao azedo."],
 ["Circunvaladas","Contêm muitos botões gustativos, ligados ao amargo."],
 ["Fungiformes e foliáceas","Ambas possuem botões gustativos."]
],"Filiforme = fio = tato. Sem gosto.");

add("B007","As papilas fungiformes estão principalmente na parte anterior da língua e relacionam-se a:",[
 ["Doce e salgado","Correta. São as papilas da ponta, ligadas a doce e salgado."],
 ["Amargo","Amargo é associado às circunvaladas, posteriores."],
 ["Azedo","Azedo é associado às foliáceas, laterais."],
 ["Textura apenas","Textura sem gosto é função das filiformes."],
 ["Umami e amargo","Não é a associação descrita para as fungiformes."]
],"Ponta da língua prova o doce do sorvete e o sal da batata: fungiformes.");

add("B008","Sobre a distribuição dos receptores gustativos na língua, é correto afirmar:",[
 ["Há receptores em quase todos os botões; muda a concentração","Correta. Não há um mapa exclusivo; certas áreas são só mais sensíveis."],
 ["Cada sabor tem região exclusiva na língua","O \"mapa da língua\" exclusivo é um mito, segundo o material."],
 ["O amargo só é percebido na ponta da língua","O amargo predomina na parte posterior, e não é exclusivo."],
 ["As filiformes concentram a maioria dos receptores","Filiformes não têm botões gustativos."],
 ["Só as circunvaladas possuem botões gustativos","Fungiformes e foliáceas também possuem botões."]
],"Não existe mapa da língua: existe concentração.");

add("B009","A sensibilidade gustativa dos 2/3 anteriores e do terço posterior da língua é conduzida, respectivamente, por:",[
 ["Facial (corda do tímpano) e glossofaríngeo","Correta. Corda do tímpano (VII) na parte anterior; IX na posterior."],
 ["Trigêmeo (lingual) e glossofaríngeo","O trigêmeo leva dor, temperatura e textura, não gosto."],
 ["Glossofaríngeo e vago (laríngeo superior)","A parte anterior não é inervada pelo IX para gosto."],
 ["Hipoglosso e facial (ramo bucal)","O hipoglosso é motor da língua."],
 ["Facial (corda do tímpano) e trigêmeo","O trigêmeo não conduz gosto do terço posterior."]
],"Corda do tímpano na frente (VII), glossofaríngeo atrás (IX). Trigêmeo só sente, não prova.");

add("B010","O olfato retronasal contribui com que fração aproximada da percepção do sabor?",[
 ["Mais de 80%","Correta. A via retronasal responde por mais de 80% da percepção do sabor."],
 ["Cerca de 20%","Subestima muito o papel do olfato no sabor."],
 ["Cerca de 50%","O material cita mais de 80%."],
 ["Menos de 10%","O olfato é o principal componente do sabor."],
 ["Exatamente 100%","Gustação e somatossensação também participam."]
],"Nariz entupido, comida sem graça: o olfato é mais de 80% do sabor.");

add("B011","O olfato retronasal ocorre quando:",[
 ["Voláteis da boca chegam ao nariz pela nasofaringe","Correta. Os compostos sobem da boca para a cavidade nasal por trás."],
 ["Aromas entram direto pelas narinas, sem a boca","Isso é o olfato ortonasal."],
 ["Papilas gustativas captam aromas diretamente","Papilas captam gostos, não aromas."],
 ["O trigêmeo capta odores irritantes na boca","O trigêmeo capta dor, temperatura e textura."],
 ["Aromas chegam ao nariz pela tuba auditiva","A tuba auditiva não participa da olfação."]
],"Retro = por trás: da boca para o nariz pela nasofaringe.");

add("B012","A ardência da pimenta e o frescor da hortelã são percebidos por qual nervo?",[
 ["Trigêmeo","Correta. O trigêmeo capta irritação química, temperatura e textura."],
 ["Facial, pela corda do tímpano","A corda do tímpano conduz gosto, não irritação química."],
 ["Glossofaríngeo","O IX conduz gosto do terço posterior."],
 ["Olfatório","O olfatório capta aromas, não ardência."],
 ["Hipoglosso","O hipoglosso é nervo motor da língua."]
],"Pimenta, wasabi, cebola e hortelã: tudo trigêmeo (somatossensorial).");

add("B013","Sobre o sistema modulador do sabor, qual associação está correta?",[
 ["Recipiente arredondado sugere sabor doce","Correta. Formas redondas lembram doce; angulosas lembram ácido."],
 ["Cor verde sugere sabor doce","Verde sugere cítrico; vermelho sugere doce."],
 ["Recipiente angulado sugere sabor doce","Angulado sugere cítrico/ácido."],
 ["Sons suaves sugerem alimento crocante","Barulho ao mastigar sugere crocante; sons suaves, cremoso."],
 ["Sorvete gelado parece mais doce","Muito gelado, o sorvete parece MENOS doce."]
],"Redondo e vermelho = doce. Anguloso e verde = ácido.");

add("B014","Qual grupo de lesões orais é o mais comum?",[
 ["Lesões brancas","Correta. O material destaca as lesões brancas como as mais comuns."],
 ["Lesões vesicobolhosas","São menos frequentes que as brancas."],
 ["Lesões aftoides","Não são apontadas como o grupo mais comum."],
 ["Lesões granulomatosas","São bem menos frequentes."],
 ["Lesões pigmentadas","Não foram citadas como as mais comuns."]
],"Boca: o branco domina.");

add("B015","Qual fator é predisponente SISTÊMICO para candidíase oral?",[
 ["Diabetes mellitus","Correta. DM, gestação, extremos de idade, imunossupressão e ATB prolongado são sistêmicos."],
 ["Uso de prótese dentária","É fator local."],
 ["Higiene oral precária","É fator local."],
 ["Diminuição da salivação","É fator local."],
 ["Mordedura da mucosa jugal","É trauma local, não fator para Candida."]
],"Local = boca (prótese, higiene, saliva). Sistêmico = corpo (DM, gestação, idade, imuno, ATB).");

add("B016","Placas esbranquiçadas tipo leite coalhado, removíveis à raspagem, sugerem:",[
 ["Candidíase pseudomembranosa","Correta. Forma mais comum, de diagnóstico clínico, placas removíveis."],
 ["Candidíase hiperplásica","Na hiperplásica as placas são aderidas, de difícil remoção."],
 ["Leucoplasia comum","Leucoplasia não sai à raspagem."],
 ["Leucoplasia pilosa","É lesão lateral da língua, pilosa, não removível."],
 ["Líquen plano reticular","Tem estrias rendilhadas não removíveis."]
],"Saiu raspando = Candida pseudomembranosa. Não saiu = pense em outra coisa.");

add("B017","Na candidíase hiperplásica, é característico:",[
 ["Placas aderidas por hiperceratose","Correta. É mais invasiva e as placas são de difícil remoção."],
 ["Placas que saem facilmente à raspagem","Isso descreve a pseudomembranosa."],
 ["Diagnóstico sempre só clínico","Pode exigir citologia, biópsia, micológico ou cultura."],
 ["Tratamento com nistatina deglutida","Nistatina é para a forma pseudomembranosa e não deve ser deglutida."],
 ["Estrias de Wickham bilaterais","Wickham é achado do líquen plano."]
],"Hiperplásica = hiperceratose = gruda.");

add("B018","Para candidíase pseudomembranosa simples, o tratamento indicado é:",[
 ["Nistatina tópica 5x/dia, sem deglutir","Correta. Suspensão 100.000 UI/ml, 5 ml, 5 vezes ao dia."],
 ["Anfotericina B 0,3 a 0,5 mg/kg/dia","Reservada para formas graves, faríngea ou esofágica."],
 ["Fluconazol 200 mg EV por 14 dias","Fluconazol é para formas mais graves, por via oral."],
 ["Miconazol gel por 2 a 4 semanas","Indicado para a forma hiperplásica simples."],
 ["Aciclovir oral de 4 em 4 horas","Aciclovir é antiviral, sem ação sobre Candida."]
],"Pseudo = nistatina (bochecha e cospe). Hiperplásica = miconazol gel. Grave = fluconazol ou anfo B.");

add("B019","Por que a candidíase faríngea/esofágica tem implicação diferente da oral isolada?",[
 ["É critério de infecção severa por imunossupressão","Correta. A oral isolada não indica imunossupressão grave; a esofágica sim."],
 ["É sempre de fácil tratamento com nistatina tópica","As formas faringoesofágicas podem exigir anfotericina B."],
 ["Indica apenas higiene oral precária e prótese","Higiene precária explica a forma oral, não a esofágica."],
 ["Sugere lesão pré-maligna associada na mucosa","Não tem relação com malignização."],
 ["Ocorre só em usuários de prótese dentária total","Prótese é fator local da forma oral."]
],"Candida desceu para o esôfago = alerta de imunossupressão grave.");

add("B020","Lesão branca de aspecto piloso na borda lateral da língua, em paciente HIV positivo, é causada por:",[
 ["Vírus Epstein-Barr","Correta. É a leucoplasia pilosa, marcador de AIDS doença."],
 ["Candida albicans","Candida causa placas removíveis, não aspecto piloso fixo."],
 ["HPV 16 e 18","HPV causa papilomas, verrugas e condilomas."],
 ["Herpes simples tipo 1","HSV causa vesículas e úlceras."],
 ["Citomegalovírus","Não é o agente da leucoplasia pilosa."]
],"Pilosa + lateral da língua + HIV = EBV.");

add("B021","Sobre a leucoplasia pilosa, é correto afirmar:",[
 ["Melhora com o controle da infecção pelo HIV","Correta. O antirretroviral, ao melhorar a imunidade, melhora a lesão."],
 ["É lesão pré-maligna como a leucoplasia comum","São entidades diferentes; a comum é pré-maligna."],
 ["É removível à raspagem com espátula","Não é removível."],
 ["O aciclovir tem eficácia sempre completa","O aciclovir tem eficácia variável."],
 ["Diagnóstico exige sorologia para HIV","O EBV se identifica por hibridização, imuno-histoquímica, PCR ou ME."]
],"Na pilosa, quem trata de verdade é a imunidade.");

add("B022","Qual método identifica o EBV na leucoplasia pilosa?",[
 ["Hibridização in situ","Correta. Também servem imuno-histoquímica, PCR e microscopia eletrônica."],
 ["Exame micológico direto","Serve para fungos, como a Candida."],
 ["Sinal de Nikolsky","É manobra clínica do pênfigo."],
 ["Reação de Montenegro","É usada na leishmaniose."],
 ["VDRL sérico","É teste não treponêmico da sífilis."]
],"EBV no tecido: hibridização, imuno-histoquímica, PCR, microscopia eletrônica.");

add("B023","No líquen plano oral, a lesão resulta de:",[
 ["Destruição da membrana basal por linfócitos T","Correta. Linfócitos T citotóxicos atacam as células basais."],
 ["Autoanticorpos IgG contra desmogleína 3","Esse é o mecanismo do pênfigo vulgar."],
 ["Infecção crônica pelo vírus Epstein-Barr","EBV causa a leucoplasia pilosa."],
 ["Proliferação de Candida sobre a mucosa","Candida causa a candidíase."],
 ["Exposição crônica à radiação ultravioleta","UV causa queilite actínica."]
],"Líquen = linfócito T contra a camada basal.");

add("B024","Placas brancas rendilhadas e bilaterais na mucosa jugal (estrias de Wickham) sugerem:",[
 ["Líquen plano reticular","Correta. A forma reticular é a mais comum do líquen plano."],
 ["Candidíase pseudomembranosa","Candida forma placas removíveis tipo leite coalhado."],
 ["Leucoplasia homogênea","Leucoplasia é placa branca de exclusão, não rendilhada."],
 ["Leucoplasia pilosa","Ocorre na borda lateral da língua, com aspecto piloso."],
 ["Fibrose submucosa oral","Causa espessamento e trismo, não estrias."]
],"Wickham = renda = líquen reticular.");

add("B025","Qual é o perfil típico do paciente com líquen plano?",[
 ["Mulher entre 30 e 50 anos","Correta. São os fatores de risco citados."],
 ["Homem fumante acima de 60 anos","Perfil mais ligado à leucoplasia e CEC."],
 ["Criança entre 1 e 6 anos","Faixa típica de herpes primário."],
 ["Idoso entre 70 e 90 anos","Faixa do penfigoide bolhoso."],
 ["Adolescente com mononucleose","Perfil do EBV, não do líquen."]
],"Líquen: mulher de meia-idade, surtos com estresse.");

add("B026","No líquen plano, é correto:",[
 ["Não há achado histológico patognomônico","Correta. O diagnóstico é clínico e histopatológico, sem achado patognomônico."],
 ["O potencial de malignização é alto","É baixo, entre 0,04% e 1,74%."],
 ["É sempre tratado com cirurgia","Trata-se com orientação, corticoide ou retinoide tópico."],
 ["A forma erosiva é a mais comum","A forma mais comum é a reticular."],
 ["Não acomete a pele","Também causa pápulas violáceas em superfícies flexoras."]
],"Líquen: benigno, em surtos, sem patognomônico, trate se sintomático.");

add("B027","Qual o tratamento inicial do líquen plano oral sintomático?",[
 ["Corticoide tópico ou sistêmico","Correta. Usado quando há sintomas, além de tranquilizar o paciente."],
 ["Excisão cirúrgica com margem","Não é tratamento de rotina do líquen."],
 ["Nistatina tópica 5 vezes ao dia","É tratamento de candidíase."],
 ["Penicilina G por tempo prolongado","É tratamento de actinomicose."],
 ["Aciclovir oral de 8 em 8 horas","É antiviral, sem papel no líquen."]
],"Inflamatório autoimune = corticoide. Retinoide tópico se mais severo.");

add("B028","A fibrose submucosa oral caracteriza-se por:",[
 ["Trismo progressivo, ligada ao tabaco mascado","Correta. Fibrose da submucosa restringe a abertura da boca; é pré-maligna."],
 ["Placas removíveis em imunossuprimidos","Isso descreve candidíase."],
 ["Bolhas flácidas que se rompem fácil","Isso descreve pênfigo."],
 ["Crostas no lábio inferior por sol","Isso descreve queilite actínica."],
 ["Lesão benigna sem risco de câncer","É considerada lesão pré-maligna."]
],"Betel/tabaco mascado endurece a bochecha: fibrose e trismo.");

add("B029","Pescador com descamação, crostas e eritema no lábio inferior, assintomático. O diagnóstico e o risco são:",[
 ["Queilite actínica; risco de CEC labial","Correta. É lesão pré-maligna ligada à radiação UV crônica."],
 ["Herpes labial; risco de zóster","Herpes tem pródromo e vesículas, não exposição solar crônica."],
 ["Líquen plano; risco alto de câncer","Não é líquen, e o risco do líquen é baixo."],
 ["Leucoplasia pilosa; risco de AIDS","Leucoplasia pilosa é na língua, pelo EBV."],
 ["Sífilis primária; risco de neurossífilis","Cancro duro é úlcera indolor endurecida, não descamação."]
],"Sol + lábio inferior + trabalhador ao ar livre = queilite actínica (pré-CEC).");

add("B030","Qual opção de tratamento tópico é citada para queilite actínica?",[
 ["5-fluorouracil","Correta. Tópico, junto com crioterapia; cirurgia nos avançados."],
 ["Nistatina em suspensão","É antifúngico para candidíase."],
 ["Aciclovir creme 5%","É antiviral para herpes."],
 ["Clorexidina em bochecho","É antisséptico, não trata a queilite."],
 ["Triancinolona em orabase","É usada em aftas."]
],"Queilite actínica: 5-FU ou crio. Prevenção: protetor labial e chapéu.");

add("B031","Por definição, a leucoplasia oral é:",[
 ["Lesão branca de exclusão, não caracterizável","Correta. É diagnóstico de exclusão e lesão pré-maligna."],
 ["Lesão branca removível por raspagem","Leucoplasia não sai à raspagem."],
 ["Lesão causada sempre pelo EBV","EBV causa a leucoplasia pilosa."],
 ["Lesão vermelha com alto risco de câncer","Isso é eritroplasia."],
 ["Lesão benigna sem potencial maligno","É lesão pré-maligna."]
],"Leucoplasia = branco que não é nada mais. Exclusão.");

add("B032","Qual é a sequência correta da carcinogênese a partir da leucoplasia?",[
 ["Metaplasia, displasia, carcinoma in situ, invasor","Correta. Do epitélio normal ao carcinoma que rompe a membrana basal."],
 ["Displasia, metaplasia, invasor, in situ","A ordem está trocada."],
 ["Metaplasia, invasor, displasia, in situ","O invasor é a etapa final, não intermediária."],
 ["Carcinoma in situ, metaplasia, displasia","O in situ vem depois da displasia."],
 ["Displasia, carcinoma invasor, metaplasia","A metaplasia é a primeira alteração."]
],"M-D-I-I: Metaplasia, Displasia, In situ, Invasor.");

add("B033","O que diferencia o carcinoma invasor do carcinoma intraepitelial?",[
 ["O invasor ultrapassa a membrana basal","Correta. Por isso passa a ter potencial de metástase."],
 ["O intraepitelial já dá metástase","Restrito à membrana basal, não metastatiza."],
 ["O invasor é sempre de cor branca","A cor não define invasão; fases avançadas podem ficar vermelhas."],
 ["O intraepitelial não tem displasia","Ele corresponde à displasia severa."],
 ["O invasor regride ao cessar o tabaco","A remoção do fator não reverte um carcinoma invasor."]
],"Membrana basal é a fronteira: passou, invadiu, pode metastatizar.");

add("B034","Qual o perfil epidemiológico da leucoplasia oral?",[
 ["Homem, 50 a 70 anos, tabaco e álcool","Correta. Prevalência de 1% a 5%."],
 ["Mulher, 30 a 50 anos, estresse","É o perfil do líquen plano."],
 ["Criança, 1 a 6 anos, febre","É o perfil da primoinfecção herpética."],
 ["Adulto jovem, branco, não fumante","É o perfil da estomatite aftoide recorrente."],
 ["Idoso, 70 a 90 anos, medicamentos","Lembra o penfigoide bolhoso."]
],"Leucoplasia = homem velho que fuma e bebe.");

add("B035","Sobre o aspecto clínico da leucoplasia, é correto:",[
 ["Quanto mais antiga, mais branca e pior","Correta. O epitélio perde a translucidez com a progressão."],
 ["É dolorosa desde o início","Geralmente é indolor."],
 ["Sai facilmente com uma gaze","Não é removível por raspagem."],
 ["Ocorre sobretudo no dorso da língua","Locais típicos: bordas e ventre da língua, assoalho e mucosa jugal."],
 ["É sempre lesão única","Pode ser única ou múltipla."]
],"Mais velha, mais branca, mais grave.");

add("B036","Leucoplasia pequena, homogênea e de superfície regular. Qual a conduta inicial adequada?",[
 ["Conservadora: retirar fatores e acompanhar","Correta. Cessar tabaco e álcool, observar, considerar tópicos."],
 ["Laringectomia parcial imediata","Não tem relação com leucoplasia oral."],
 ["Quimioterapia sistêmica","Reservada a metástases de CEC."],
 ["Excisão ampla com esvaziamento cervical","Exagerado para lesão de baixo risco."],
 ["Radioterapia exclusiva","Não é conduta para leucoplasia homogênea."]
],"Pequena, homogênea, regular = conservador. Displasia moderada ou mais = cirurgia.");

add("B037","Leucoplasia com displasia moderada a grave ou carcinoma in situ deve ser tratada com:",[
 ["Excisão cirúrgica com margem de segurança","Correta. A biópsia excisional é preferida e permite histologia."],
 ["Observação clínica com retorno anual","Insuficiente para lesão de alto risco."],
 ["Nistatina tópica e higiene oral rigorosa","Não trata displasia."],
 ["Corticoide tópico isolado por 4 semanas","Insuficiente para displasia moderada ou grave."],
 ["Aciclovir em pomada 5 vezes ao dia","Antiviral não trata displasia."]
],"Displasia que importa = tira tudo com margem.");

add("B038","Qual é o câncer mais comum da cavidade oral?",[
 ["Carcinoma de células escamosas","Correta. O CEC é o mais comum da boca e de outras mucosas."],
 ["Adenocarcinoma de glândula salivar","É bem menos comum que o CEC."],
 ["Linfoma não Hodgkin","Não é o mais comum da cavidade oral."],
 ["Melanoma de mucosa","É raro."],
 ["Sarcoma de Kaposi","Associado ao HIV, mas não é o mais comum."]
],"Mucosa escamosa = câncer escamoso (CEC).");

add("B039","Qual forma de CEC oral é mais agressiva, sem contorno definido e com disseminação local ou regional?",[
 ["Infiltrativa","Correta. Invade tecidos adjacentes e pode metastatizar."],
 ["Plana","A plana é mais indolente, com bordas definidas."],
 ["Verrucosa homogênea","Não é a forma descrita como mais agressiva."],
 ["Pseudomembranosa","É forma de candidíase."],
 ["Reticular","É forma de líquen plano."]
],"Infiltrativo infiltra: sem borda, invade, espalha.");

add("B040","No estadiamento do CEC oral, quais ferramentas são citadas?",[
 ["TC, RM e USG de pescoço","Correta. Avaliam tumor, linfonodos e metástases."],
 ["Sinal de Nikolsky e IFD","São do pênfigo."],
 ["VDRL e FTA-ABS","São da sífilis."],
 ["PPD e RX de tórax","São usados na tuberculose."],
 ["Reação de Montenegro e PCR","São da leishmaniose."]
],"Estadiar = TNM: imagem (TC, RM, USG).");

add("B041","Qual é o tratamento principal do CEC oral?",[
 ["Excisão cirúrgica com margem livre","Correta. RT ou QT entram em casos avançados ou adjuvância."],
 ["Quimioterapia exclusiva inicial","QT é para metástase a distância ou falha local."],
 ["Corticoide sistêmico em pulso","Não trata neoplasia."],
 ["Crioterapia isolada da lesão","Não é o tratamento padrão do CEC."],
 ["Observação clínica seriada","Inadequado para neoplasia maligna."]
],"CEC de boca: primeiro o bisturi.");

add("B042","No pênfigo vulgar, o alvo dos autoanticorpos é:",[
 ["Desmogleína 3, nos desmossomos","Correta. Gera acantólise e bolha intraepitelial."],
 ["Colágeno VII, nos hemidesmossomos","Esse é o mecanismo do penfigoide."],
 ["Membrana basal, por linfócitos T","Esse é o mecanismo do líquen plano."],
 ["Proteína M do estreptococo","Ligada à febre reumática."],
 ["Queratina da camada córnea","Não é o alvo descrito."]
],"PÊnfigo = suPErficial = dEsmossomo. PenfigOIDE = prOfundo = hemidesmossomo.");

add("B043","A bolha do pênfigo vulgar é:",[
 ["Intraepitelial, flácida, rompe fácil","Correta. Por acantólise suprabasal, deixando erosões dolorosas."],
 ["Subepidérmica, tensa e resistente","Isso descreve o penfigoide bolhoso."],
 ["Sempre indolor e sem erosão","As erosões são dolorosas."],
 ["Restrita à pele, sem lesão oral","Acomete boca e couro cabeludo."],
 ["Infecciosa, pelo herpes simples","É autoimune."]
],"Pênfigo: bolha fina que estoura e dói.");

add("B044","O sinal de Nikolsky consiste em:",[
 ["Tração da mucosa provocar surgimento de bolha","Correta. Ex.: tração com espátula no trígono retromolar."],
 ["Estrias brancas rendilhadas na jugal","São as estrias de Wickham do líquen plano."],
 ["Placa que sai ao raspar com espátula","Ocorre na candidíase pseudomembranosa."],
 ["Aspecto de morango na mucosa","É a estomatite moriforme da paracoco."],
 ["Grânulos amarelos na secreção","São os grânulos sulfurosos da actinomicose."]
],"Nikolsky: puxou, descolou, fez bolha = pênfigo.");

add("B045","No pênfigo, qual exame é mais realizado e mais barato?",[
 ["Imunofluorescência direta","Correta. Detecta anti-desmogleína 3 no tecido."],
 ["Imunofluorescência indireta","É mais cara e usada no seguimento, com titulação."],
 ["PCR para herpes simples","Não diagnostica pênfigo."],
 ["Cultura micológica","Serve para fungos."],
 ["Reação de Paul-Bunnell","É da mononucleose."]
],"IFD = Diagnóstico (direto e barato). IFI = acompanhar títulos.");

add("B046","O penfigoide bolhoso diferencia-se do pênfigo por:",[
 ["Bolha subepidérmica e mais resistente","Correta. Afeta hemidesmossomos; idosos de 7ª a 9ª década."],
 ["Bolha intraepitelial e flácida","Isso é o pênfigo."],
 ["Ataque à desmogleína 3","Isso é o pênfigo."],
 ["Ocorrer só em crianças pequenas","Ocorre em idosos."],
 ["Ser causado pelo vírus Coxsackie","É autoimune."]
],"Penfigoide: profundo, bolha forte, velhinho, pode ter gatilho medicamentoso.");

add("B047","Qual medida faz parte do tratamento do penfigoide bolhoso?",[
 ["Corticoide sistêmico e imunossupressores","Correta. Também clorexidina, dapsona, plasmaférese e laser."],
 ["Penicilina benzatina dose única","Não tem papel no penfigoide."],
 ["Nistatina tópica sem deglutir","Trata candidíase."],
 ["Antimonial pentavalente","Trata leishmaniose."],
 ["RIPE por 6 meses","Trata tuberculose."]
],"Autoimune bolhoso = corticoide + imunossupressor + boca limpa (clorexidina).");

add("B048","Qual destes é um desencadeante clássico do eritema multiforme?",[
 ["Infecção prévia por herpes simples","Correta. Também Mycoplasma, hepatite C e medicamentos."],
 ["Exposição solar crônica","Causa queilite actínica."],
 ["Tabaco mascado e betel","Causam fibrose submucosa."],
 ["Prótese dentária mal adaptada","É fator local de candidíase ou trauma."],
 ["Vacina contra HPV","Não é citada como gatilho."]
],"Eritema multiforme: HSV, Mycoplasma, hepatite C ou droga.");

add("B049","Qual critério define a estomatite aftoide recorrente?",[
 ["Úlceras a cada 15 a 30 dias, cura em 1 a 4 semanas","Correta. Início na infância ou adolescência, por 1 ano ou mais, sem outra doença."],
 ["Úlcera única indolor de base endurecida","Descreve cancro duro sifilítico."],
 ["Vesículas unilaterais com pródromo","Descreve herpes recorrente."],
 ["Úlcera com fundo granulomatoso e borda alta","Lembra leishmaniose."],
 ["Lesões só em imunossuprimidos","A EAR ocorre em pessoas sem outras doenças."]
],"EAR: começa cedo, volta todo mês, cura sozinha.");

add("B050","Qual é o perfil de risco da estomatite aftoide recorrente?",[
 ["Adulto jovem, branco, nível alto, não fumante","Correta. Prevalência de 10% a 20%."],
 ["Idoso fumante e etilista","Perfil de leucoplasia e CEC."],
 ["Criança desnutrida e imunossuprimida","Perfil do Noma."],
 ["Homem com HIV não controlado","Perfil de leucoplasia pilosa e aftas maiores."],
 ["Mulher de 30 a 50 anos","Perfil do líquen plano."]
],"Afta recorrente curiosamente poupa o fumante.");

add("B051","Aftas de 0,5 a 3 cm, profundas, que levam 4 a 6 semanas para cicatrizar, são:",[
 ["Aftas maiores (Sutton)","Correta. Atingem lábios e palato mole; mais em imunossuprimidos."],
 ["Aftas menores (Mikulicz)","São superficiais, até 0,5 cm, duram 7 a 14 dias."],
 ["Aftas herpetiformes","São múltiplas e pequenas, de 2 a 3 mm."],
 ["Herpangina","É viral, com vesículas no palato posterior."],
 ["Cancro duro","É úlcera sifilítica única e indolor."]
],"Sutton = Super (grande e demorada). Mikulicz = Mini.");

add("B052","As aftas herpetiformes diferem do herpes porque:",[
 ["Não são infecciosas nem têm sintomas sistêmicos","Correta. Apesar do nome, não são causadas por vírus."],
 ["São causadas pelo HSV tipo 2 em adultos","Não são infecciosas."],
 ["Surgem como lesão única, grande e profunda","São múltiplas (2 a 200) e pequenas."],
 ["São indolores e não incomodam ao comer","São dolorosas."],
 ["Respondem só ao aciclovir oral precoce","Não são virais; trata-se como afta."]
],"Herpetiforme parece herpes, mas não é vírus.");

add("B053","Qual medicação é usada na PREVENÇÃO da estomatite aftoide recorrente?",[
 ["Colchicina","Correta. Também dapsona e talidomida."],
 ["Nistatina","É antifúngico."],
 ["Penicilina benzatina","Não previne aftas."],
 ["Fluconazol","É antifúngico."],
 ["Isoniazida","É antituberculoso."]
],"Prevenir afta: Dapsona, Colchicina, Talidomida (DCT).");

add("B054","A tríade clássica da doença de Behçet é:",[
 ["Aftas orais, aftas genitais e uveíte","Correta. É vasculite crônica e subtipo da EAR."],
 ["Lesão oral, linfonodo e pulmão","É a tríade da paracoccidioidomicose."],
 ["Febre, faringite e adenite","Lembra a PFAPA."],
 ["Paralisia facial, surdez e vesículas","É a síndrome de Ramsay Hunt."],
 ["Úlcera oral, artrite e uretrite","Não é a tríade de Behçet citada."]
],"Behçet: boca, genital, olho.");

add("B055","A mucosite (estomatite medicamentosa) está associada principalmente a:",[
 ["Metotrexato e fluorouracil","Correta. Reduzem a regeneração do epitélio."],
 ["Nistatina e miconazol","São antifúngicos tópicos."],
 ["Aciclovir e valaciclovir","São antivirais."],
 ["Penicilina e amoxicilina","Não são as causas citadas."],
 ["Corticoide tópico em orabase","É tratamento de aftas."]
],"Quimio que trava a divisão celular descasca a boca.");

add("B056","Quais subtipos de HPV têm maior chance de levar à neoplasia?",[
 ["16 e 18","Correta. São os de alto risco oncogênico."],
 ["6 e 11","São de baixo risco, ligados a verrugas e papilomas."],
 ["1 e 2","Não são os citados como oncogênicos."],
 ["6 e 18","O 6 é de baixo risco."],
 ["11 e 16","O 11 é de baixo risco."]
],"16 e 18 = câncer. 6 e 11 = verruga.");

add("B057","Qual achado histopatológico é típico da infecção por HPV?",[
 ["Coilocitose","Correta. Pode-se ainda usar imuno-histoquímica da p16 e PCR."],
 ["Acantólise suprabasal","Típica do pênfigo."],
 ["Grânulos sulfurosos","Típicos da actinomicose."],
 ["Estrias de Wickham","Achado clínico do líquen plano."],
 ["Granuloma caseoso","Típico da tuberculose."]
],"HPV = coilócito (célula com halo).");

add("B058","Por que as lesões orais por HPV devem ser tratadas de forma agressiva?",[
 ["Há autoinoculação e recidiva frequente","Correta. Exérese e cauterização da base eliminam formas subclínicas."],
 ["Porque o HPV tem cura com antiviral","Não há cura; a prevenção é a chave."],
 ["Porque sempre evoluem para CEC","Nem todas evoluem; 16 e 18 têm mais risco."],
 ["Porque causam febre alta e toxemia","Em geral não causam outros sintomas."],
 ["Porque respondem bem a corticoide","Corticoide não trata HPV."]
],"HPV: tira tudo e cauteriza a base, senão volta.");

add("B059","Qual característica é comum aos vírus da família Herpesviridae?",[
 ["Latência em gânglio sensitivo e recorrência","Correta. Reativam com queda da imunidade."],
 ["Transmissão exclusivamente sexual","O HSV1 é transmitido por saliva, na infância."],
 ["Ausência de infecção subclínica","A infecção é geralmente subclínica."],
 ["Tropismo por células endodérmicas","O tropismo é por células ectodérmicas."],
 ["Cura definitiva após primoinfecção","O vírus fica latente."]
],"Herpes: entra, dorme no gânglio, acorda quando a imunidade cai.");

add("B060","Na primoinfecção por herpes simples, é correto:",[
 ["Só cerca de 1% é sintomático (gengivoestomatite)","Correta. Ocorre geralmente entre 1 e 6 anos."],
 ["É sempre grave e deixa sequelas na mucosa","É autolimitada, durando 10 a 14 dias."],
 ["Predomina o HSV tipo 2 na cavidade oral","Cerca de 80% é tipo 1."],
 ["A lesão é sempre unilateral e no lábio","Lesões unilaterais são típicas da recorrência."],
 ["Exige aciclovir oral em todos os casos","Na primoinfecção não há indicação de tratamento, segundo o Tratado."]
],"Primoinfecção herpética: criança, quase sempre silenciosa.");

add("B061","No herpes labial recorrente, quando o antiviral tem mais benefício?",[
 ["Na fase de pródromo (ardência e dor)","Correta. Pode abortar a recidiva ou reduzir intensidade e duração."],
 ["Após as crostas se formarem","Nessa fase o benefício é mínimo."],
 ["Somente na primoinfecção","Na recidiva o melhor momento é o pródromo."],
 ["Após 2 semanas de lesão","A lesão já estaria em resolução."],
 ["Apenas se houver febre alta","Recidivas não costumam ter febre."]
],"Formigou o lábio? É hora do antiviral.");

add("B062","Qual posologia de aciclovir oral é citada para herpes simples?",[
 ["De 4 em 4 horas","Correta. Valaciclovir é de 8 em 8 horas."],
 ["Dose única semanal","Não é a posologia citada."],
 ["De 24 em 24 horas","Não é a posologia citada para aciclovir."],
 ["De 12 em 12 horas por 6 meses","Não é a posologia citada."],
 ["De 8 em 8 horas","Essa é a do valaciclovir."]
],"Aciclovir = 4/4h (meia-vida curta). Valaciclovir = 8/8h.");

add("B063","Herpes-zóster com paralisia facial e surdez súbita caracteriza:",[
 ["Síndrome de Ramsay Hunt (VII e VIII)","Correta. Comprometimento dos pares VII e VIII."],
 ["Doença de Behçet (vasculite)","Tríade de aftas orais, genitais e uveíte."],
 ["Angina de Ludwig (celulite)","Celulite do assoalho bucal."],
 ["Síndrome mão-pé-boca (Coxsackie)","Enterovirose com lesões em mãos e pés."],
 ["Zóster oftálmico (ramo V1)","Acomete o ramo oftálmico do trigêmeo."]
],"Ramsay Hunt: zóster que derruba a face (VII) e a audição (VIII).");

add("B064","No herpes-zóster, o corticosteroide é bem indicado para:",[
 ["Prevenir neuralgia pós-herpética","Correta. Antiviral entra em doses maiores que no herpes simples."],
 ["Eliminar o vírus do gânglio","Nenhuma droga elimina a latência."],
 ["Substituir o antiviral","O antiviral é mantido."],
 ["Tratar candidíase associada","Corticoide pode até favorecer Candida."],
 ["Evitar a varicela primária","A varicela é a infecção primária, não alvo do corticoide."]
],"Zóster: antiviral em dose alta + corticoide contra a neuralgia.");

add("B065","Herpangina e doença mão-pé-boca são causadas por:",[
 ["Coxsackievírus A16 e enterovírus 71","Correta. Herpangina é a forma oral; mão-pé-boca tem lesões cutâneas."],
 ["Herpes simples tipos 1 e 2","Não são enteroviroses."],
 ["Vírus Epstein-Barr","Causa mononucleose e leucoplasia pilosa."],
 ["Varicela-zóster","Causa catapora e cobreiro."],
 ["HPV 6 e 11","Causam papilomas."]
],"Coxsackie: vesículas no fundo da boca e nas mãos e pés.");

add("B066","Na tuberculose oral, a lesão típica é:",[
 ["Úlcera irregular, muito dolorosa, com fibrina","Correta. Mais na língua; forma primária é muito rara."],
 ["Úlcera indolor, de base endurecida e única","Descreve o cancro duro."],
 ["Estomatite moriforme, em aspecto de morango","Descreve paracoccidioidomicose."],
 ["Placa branca removível à raspagem","Descreve candidíase."],
 ["Vesícula unilateral, recorrente, com pródromo","Descreve herpes recorrente."]
],"TB na boca dói muito; sífilis primária não dói.");

add("B067","Qual o esquema básico da tuberculose para adultos e adolescentes?",[
 ["2 RHZE / 4 RH","Correta. 2 meses intensivos com 4 drogas e 4 meses de manutenção."],
 ["4 RHZE / 2 RH","A fase intensiva é de 2 meses, não 4."],
 ["2 RH / 4 RHZE","A ordem está invertida."],
 ["6 RHZE contínuo","Não é o esquema básico."],
 ["2 RHZE / 10 RH","Esquema prolongado não é o básico citado."]
],"2 meses com 4 drogas, depois 4 meses com 2.");

add("B068","Na leishmaniose, o que a reação intradérmica de Montenegro indica?",[
 ["Exposição prévia, não doença ativa","Correta. Por isso não confirma o diagnóstico sozinha."],
 ["Doença ativa com alta especificidade","Ela não indica doença ativa."],
 ["Presença do DNA do parasita","Isso é a PCR."],
 ["Forma visceral confirmada","Sorologia é melhor para a visceral."],
 ["Cura após antimonial","Não é usada para controle de cura."]
],"Montenegro positivo = já teve contato. Não é atestado de doença.");

add("B069","Na leishmaniose mucosa, qual exame é o mais utilizado na prática para confirmar o parasita?",[
 ["PCR com hibridização in situ","Correta. Detecta o DNA do agente."],
 ["Reação de Montenegro","Indica só exposição prévia."],
 ["Sorologia por ELISA","É menos sensível para a forma cutaneomucosa."],
 ["VDRL","É teste da sífilis."],
 ["Exame micológico direto","Serve para fungos."]
],"Leishmania mucosa: PCR confirma; sorologia é para visceral.");

add("B070","Qual é a droga mais efetiva para leishmaniose mucosa?",[
 ["Antimonial pentavalente","Correta. Alternativas: anfotericina B, pentamidina e miltefosina."],
 ["Itraconazol oral","Usado na paracoccidioidomicose e histoplasmose."],
 ["Penicilina G cristalina","Usada na actinomicose e sífilis."],
 ["Metronidazol venoso","Usado em anaeróbios, como na GUNA."],
 ["Aciclovir em dose alta","É antiviral."]
],"Leish = antimonial.");

add("B071","Estomatite moriforme, linfonodomegalia cervical e lesão pulmonar sugerem:",[
 ["Paracoccidioidomicose","Correta. É a tríade típica: boca, pescoço e pulmão."],
 ["Tuberculose oral","Úlcera dolorosa com fibrina, sem aspecto moriforme."],
 ["Leishmaniose mucosa","Lesão infiltrativa destrutiva, nasal e oral."],
 ["Histoplasmose","Úlcera granulomatosa que simula carcinoma."],
 ["Sífilis secundária","Placas mucosas branco-acinzentadas."]
],"Paracoco: morango na boca + pescoço + pulmão (P. brasiliensis).");

add("B072","Qual é o tratamento citado para paracoccidioidomicose?",[
 ["Itraconazol ou sulfametoxazol-trimetoprim","Correta. Anfotericina B nos casos graves."],
 ["Antimonial pentavalente por 30 dias","Trata leishmaniose."],
 ["Penicilina benzatina semanal","Trata sífilis."],
 ["Esquema 2 RHZE / 4 RH","Trata tuberculose."],
 ["Nistatina tópica com bochecho","Não trata micose sistêmica."]
],"Paracoco: itra ou Bactrim; grave = anfo B.");

add("B073","Úlcera oral indolor, de base endurecida e bordas definidas, que regride em 3 a 6 semanas, sugere:",[
 ["Sífilis primária (cancro duro)","Correta. Surge no local de inoculação."],
 ["Sífilis terciária (goma)","Na terciária ocorre glossite atrófica."],
 ["Tuberculose oral primária","A úlcera da TB é muito dolorosa."],
 ["Afta maior (Sutton)","Afta é dolorosa."],
 ["Herpes simples recorrente","Herpes forma vesículas dolorosas."]
],"Cancro DURO: duro na base e não dói.");

add("B074","Qual manifestação oral corresponde à sífilis secundária?",[
 ["Placas mucosas branco-acinzentadas","Correta. Há disseminação hematogênica e condiloma plano."],
 ["Cancro duro indolor","É a forma primária."],
 ["Glossite atrófica no dorso","É a forma terciária."],
 ["Estomatite moriforme","É da paracoccidioidomicose."],
 ["Necrose interdental","É da GUNA."]
],"1ª cancro, 2ª placas mucosas, 3ª glossite atrófica.");

add("B075","Sobre os testes para sífilis, é correto:",[
 ["FTA-ABS permanece positivo por toda a vida","Correta. É treponêmico, de alta especificidade."],
 ["VDRL é altamente específico para sífilis","VDRL é inespecífico (positivo na hanseníase, por exemplo)."],
 ["FTA-ABS serve para seguir resposta","O seguimento é feito com VDRL."],
 ["VDRL é teste treponêmico","VDRL é não treponêmico."],
 ["Campo escuro é teste sorológico","Campo escuro é teste direto."]
],"VDRL vai e volta (seguimento). FTA-ABS fica para sempre (cicatriz).");

add("B076","No fluxo invertido de diagnóstico da sífilis, teste treponêmico positivo e VDRL negativo indicam:",[
 ["Infecção antiga ou já tratada","Correta. VDRL baixo ou negativo indica infecção antiga ou tratada."],
 ["Infecção ativa recente","Atividade é sugerida por VDRL de 1:8 ou mais."],
 ["Falso positivo do treponêmico","Não é a interpretação do fluxo citado."],
 ["Neurossífilis confirmada","Não é a conclusão do fluxo."],
 ["Necessidade de campo escuro","Campo escuro é para lesão ativa, como o cancro."]
],"Fluxo invertido: treponêmico diz se teve; VDRL diz se está ativa.");

add("B077","Lesão oral ulcerada e granulomatosa que simula carcinoma, em imunossuprimido com doença disseminada, sugere:",[
 ["Histoplasmose","Correta. Diagnóstico por biópsia com PAS/Grocott e cultura."],
 ["Candidíase pseudomembranosa","Forma placas removíveis, não úlcera granulomatosa."],
 ["Herpangina","Vesículas posteriores em criança, autolimitada."],
 ["Queilite actínica","Lesão labial por sol, sem ulceração granulomatosa."],
 ["Líquen plano","Estrias brancas, autoimune."]
],"Histoplasma imita câncer em imunossuprimido.");

add("B078","Fístulas com drenagem de pus contendo grânulos sulfurosos sugerem:",[
 ["Actinomicose","Correta. Actinomyces israelii, tratada com penicilina G prolongada."],
 ["Tuberculose","TB forma granuloma caseoso, não grânulos sulfurosos."],
 ["Paracoccidioidomicose","Causa estomatite moriforme."],
 ["Histoplasmose","Causa úlcera granulomatosa."],
 ["Noma","Causa necrose facial em crianças desnutridas."]
],"Actino: grânulo amarelo de enxofre, penicilina por meses.");

add("B079","Úlceras gengivais dolorosas, necrose interdental e mau hálito caracterizam:",[
 ["GUNA","Correta. Anaeróbios; higiene, clorexidina e metronidazol se preciso."],
 ["Noma","Noma é necrose facial grave em criança desnutrida."],
 ["Estomatite aftoide recorrente","Não tem necrose interdental."],
 ["Herpangina","Vesículas posteriores, não necrose gengival."],
 ["Candidíase hiperplásica","Placas aderidas brancas."]
],"GUNA = gengiva necrosada e fedida. Noma = face necrosada.");

add("B080","Necrose facial grave em criança desnutrida e imunossuprimida é chamada de:",[
 ["Noma (cancrum oris)","Correta. Polimicrobiana; penicilina + metronidazol e suporte."],
 ["GUNA","A GUNA se restringe à gengiva."],
 ["Angina de Ludwig","É celulite do assoalho bucal."],
 ["Leishmaniose mucosa","Destrói mucosa nasal e oral, mas não é essa entidade."],
 ["Actinomicose cervical","Forma fístulas com grânulos sulfurosos."]
],"Noma: fome + imunossupressão + anaeróbios = necrose da face.");

})();
