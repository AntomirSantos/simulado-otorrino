// Banco: Faringe. Em cada questão a PRIMEIRA alternativa é a correta (o app embaralha).
(function(){
var T = "Faringe";
function add(id, e, alts, m){
  window.QUESTOES.push({ id:id, tema:T, enunciado:e, macete:m,
    alternativas: alts.map(function(a,i){ return { t:a[0], porque:a[1], ok:i===0 }; }) });
}

add("F001","A nasofaringe contém e se comunica, respectivamente, com:",[
 ["Adenoide; orelha média pela tuba auditiva","Correta. Fica atrás do nariz e se liga à orelha média pela tuba."],
 ["Tonsilas palatinas; esôfago","Palatinas ficam na orofaringe; o esôfago segue a hipofaringe."],
 ["Tonsilas linguais; laringe","Linguais ficam na base da língua."],
 ["Epiglote; traqueia","Epiglote pertence à laringe."],
 ["Adenoide; seio maxilar diretamente","A comunicação descrita é com a orelha média."]
],"Naso = adenoide + tuba. Oro = palatinas. Hipo = passagem para esôfago.");

add("F002","As tonsilas palatinas localizam-se na:",[
 ["Orofaringe","Correta. São vistas facilmente na oroscopia."],
 ["Nasofaringe","Na nasofaringe fica a adenoide (tonsila faríngea)."],
 ["Hipofaringe","A hipofaringe fica atrás da laringe."],
 ["Subglote","Subglote é região da laringe."],
 ["Base da língua","Ali ficam as tonsilas linguais."]
],"Palatina = palato = orofaringe.");

add("F003","O anel linfático de Waldeyer é composto por:",[
 ["Todas as tonsilas da faringe","Correta. Faríngea, peritubária, palatinas e linguais."],
 ["Apenas as tonsilas palatinas","As palatinas são só uma parte do anel."],
 ["Linfonodos cervicais profundos","Linfonodos são órgãos linfoides secundários, fora do anel."],
 ["Apenas a adenoide e as linguais","Faltam palatinas e peritubárias."],
 ["Baço e timo","Não fazem parte do anel."]
],"Waldeyer = anel com TODAS as tonsilas.");

add("F004","A tonsila peritubária localiza-se:",[
 ["Em torno do óstio da tuba auditiva","Correta. Na nasofaringe."],
 ["Na base da língua","Ali estão as linguais."],
 ["Entre os pilares do palato","Ali estão as palatinas."],
 ["No teto do nariz","Ali está a faríngea (adenoide)."],
 ["Na valécula epiglótica","Não é a localização da peritubária."]
],"Peri-tubária = ao redor da tuba.");

add("F005","Qual é a classificação mais usada das faringotonsilites?",[
 ["Pela duração: aguda até 3 meses, crônica acima","Correta. É o critério mais usado."],
 ["Pelo agente: viral, bacteriana ou fúngica","Útil, mas não é a classificação mais usada citada."],
 ["Pela idade: infantil, até 15 anos, ou adulta","Não é a classificação principal."],
 ["Pelo lado acometido: unilateral ou bilateral","Não é critério de classificação."],
 ["Pela febre: acima ou abaixo de 38,5 °C","Não é critério de classificação."]
],"3 meses é a linha: até 3 = aguda.");

add("F006","Segundo o Tratado, faringotonsilite crônica recorrente caracteriza-se por:",[
 ["Agente diferente do episódio anterior","Correta. Independe do intervalo entre episódios."],
 ["Mesmo agente persistindo há 3 meses","Não é a definição do Tratado."],
 ["Aumento permanente do volume tonsilar","Essa é a forma hiperplásica."],
 ["Presença de caseum nas criptas","Essa é a forma caseosa."],
 ["Febre periódica a cada 3 a 8 semanas","Isso é PFAPA."]
],"Recorrente = novo agente a cada episódio.");

add("F007","A forma clínica eritêmato-pultácea caracteriza-se por:",[
 ["Hiperemia com exsudato purulento","Correta. Sugere quadro bacteriano."],
 ["Placas aderidas à mucosa","Essa é a pseudomembranosa."],
 ["Úlceras profundas necróticas","Essas são formas ulcerosas profundas."],
 ["Apenas hiperemia, sem pus","Essa é a eritematosa, típica de vírus."],
 ["Vesículas no palato mole","Típicas de herpangina."]
],"Pultácea = pus.");

add("F008","Qual destas é exemplo de faringotonsilite ULCEROSA PROFUNDA?",[
 ["Plaut-Vincent","Correta. Também hemopatias, tuberculose e sífilis."],
 ["Herpes","Herpes causa úlceras superficiais."],
 ["Herpangina","Causa úlceras superficiais."],
 ["Adenovírus","Causa forma eritematosa."],
 ["Rinovírus","Causa forma eritematosa."]
],"Superficial: herpes e herpangina. Profunda: Plaut-Vincent, hemopatias, TB, sífilis.");

add("F009","Qual é a principal etiologia das faringotonsilites agudas?",[
 ["Viral, cerca de 75%","Correta. O adenovírus responde por cerca de 20%."],
 ["Bacteriana, cerca de 75%","Bactérias respondem pela minoria."],
 ["Fúngica, cerca de 50%","Fungos não são a principal causa."],
 ["Estreptocócica, cerca de 90%","O GAS responde por 30% a 40% das bacterianas."],
 ["Anaeróbia, cerca de 60%","Anaeróbios não são a principal causa."]
],"Dor de garganta: 3 em cada 4 é vírus.");

add("F010","Qual é o principal vírus causador de faringotonsilite aguda?",[
 ["Adenovírus","Correta. Cerca de 20% dos casos."],
 ["Vírus Epstein-Barr","Causa mononucleose, faringite específica."],
 ["Coxsackie A","Causa herpangina."],
 ["Parainfluenza","Principal agente do crupe."],
 ["Herpes simples","Causa faringite herpética."]
],"Adenovírus: faringite + conjuntivite.");

add("F011","Qual é o principal agente bacteriano da faringotonsilite aguda?",[
 ["Streptococcus pyogenes (GAS)","Correta. Risco de complicações imediatas e tardias."],
 ["Streptococcus pneumoniae","Mais comum em nariz e orelha."],
 ["Moraxella catarrhalis","Mais comum em nariz e orelha."],
 ["Haemophilus influenzae","Mais ligado a nariz, orelha e quadros crônicos."],
 ["Staphylococcus aureus","Produtor de beta-lactamase, em recorrências."]
],"Garganta = pyogenes. Nariz e ouvido = pneumococo, Moraxella, Haemophilus.");

add("F012","S. aureus, Haemophilus e Moraxella na faringe são relevantes porque:",[
 ["Produzem beta-lactamase","Correta. Mais comuns em recorrências e quadros crônicos."],
 ["São os principais agentes agudos","O principal agente bacteriano é o GAS."],
 ["Causam febre reumática","A febre reumática é causada pelo GAS."],
 ["São sempre vírus associados","São bactérias."],
 ["Respondem bem a penicilina pura","A beta-lactamase inativa a penicilina."]
],"Recorrente? Pense em beta-lactamase: clavulanato ou clinda.");

add("F013","Qual achado favorece faringotonsilite VIRAL?",[
 ["Coriza, conjuntivite e tosse","Correta. O quadro viral é difuso por toda a via aérea superior."],
 ["Petéquias no palato mole","Favorece bacteriana."],
 ["Febre acima de 38,5 °C de início súbito","Favorece bacteriana."],
 ["Exsudato nítido em placas","Favorece bacteriana."],
 ["Linfonodos anteriores dolorosos","Favorece bacteriana."]
],"Vírus espalha (olho, nariz, tosse). Bactéria concentra (garganta, pus, febre alta).");

add("F014","Qual é o pico de prevalência da faringotonsilite bacteriana?",[
 ["5 a 15 anos","Correta. Mesma faixa de pico da febre reumática."],
 ["0 a 2 anos","Não é o pico citado."],
 ["20 a 30 anos","Não é o pico citado."],
 ["Acima de 60 anos","Não é o pico citado."],
 ["1 a 6 anos","É faixa do crupe e do herpes primário."]
],"Estreptococo ama o escolar: 5 a 15 anos.");

add("F015","Criança com faringite bacteriana pode ter náusea, vômitos e dor abdominal por:",[
 ["Deglutição de exsudato purulento","Correta. Citado no quadro bacteriano."],
 ["Hepatoesplenomegalia","É achado da mononucleose."],
 ["Glomerulonefrite associada","GNDA é tardia e não causa isso no agudo."],
 ["Diarreia viral concomitante","Diarreia é mais de quadro viral."],
 ["Uso de penicilina","Não é a explicação citada."]
],"Engole pus, embrulha o estômago.");

add("F016","Na oroscopia, estase salivar em quadro viral indica:",[
 ["Disfagia e odinofagia","Correta. O paciente tem dificuldade de engolir a saliva."],
 ["Abscesso peritonsilar","Abscesso tem abaulamento unilateral e trismo."],
 ["Infecção bacteriana confirmada","Estase é descrita na forma eritematosa viral."],
 ["Hiperplasia tonsilar grau 4","Não é o significado da estase."],
 ["Paralisia de prega vocal","Não tem relação."]
],"Saliva parada = dói engolir.");

add("F017","No hemograma, infecção viral por EBV costuma mostrar:",[
 ["Linfócitos atípicos","Correta. Na mononucleose, linfocitose atípica acima de 20%."],
 ["Leucocitose com desvio à esquerda","Típico de infecção bacteriana."],
 ["Neutrofilia intensa","Típico de infecção bacteriana."],
 ["Eosinofilia acentuada","Não é o achado descrito."],
 ["Pancitopenia","Não é o achado descrito."]
],"Atípico = vírus (EBV). Desvio à esquerda = bactéria.");

add("F018","Qual é o padrão-ouro para o diagnóstico da faringite estreptocócica?",[
 ["Cultura de orofaringe","Correta. Busca o patógeno; indicada em repetição ou risco de complicação."],
 ["Teste rápido antigênico","Tem alta sensibilidade e especificidade, mas não é o padrão-ouro."],
 ["Hemograma completo","É inespecífico."],
 ["ASLO sérico","Indica infecção prévia, útil na febre reumática."],
 ["Escore de Centor","É ferramenta clínica, não diagnóstico definitivo."]
],"Padrão-ouro = cultura. Rápido = antígeno.");

add("F019","O teste rápido para GAS detecta:",[
 ["Proteína (antígeno) do estreptococo","Correta. Por ELISA ou imunoensaio óptico."],
 ["DNA do vírus Epstein-Barr","Não é o alvo do teste."],
 ["Anticorpo ASLO no sangue","ASLO é sorologia."],
 ["Crescimento bacteriano em placa","Isso é cultura."],
 ["Linfócitos atípicos","Isso é achado do hemograma."]
],"Teste rápido = antígeno, não cultura.");

add("F020","No escore de Centor, quanto pontua um paciente de 50 anos?",[
 ["Menos 1 ponto","Correta. Acima de 44 anos subtrai 1."],
 ["Mais 1 ponto","Mais 1 é para menores de 15 anos."],
 ["Zero ponto","Zero é para 15 a 44 anos."],
 ["Mais 2 pontos","Idade não dá 2 pontos."],
 ["Menos 2 pontos","Idade não subtrai 2."]
],"Centor idade: menor de 15 soma, 15 a 44 zero, acima de 44 subtrai.");

add("F021","Qual destes NÃO é critério que soma ponto no Centor?",[
 ["Presença de tosse","Correta. É a AUSÊNCIA de tosse que soma, pois tosse sugere vírus."],
 ["Febre acima de 38,5 °C","Soma 1 ponto."],
 ["Exsudato tonsilar nítido","Soma 1 ponto."],
 ["Linfonodomegalia cervical dolorosa","Soma 1 ponto."],
 ["Idade abaixo de 15 anos","Soma 1 ponto."]
],"Centor: FEbre, EXsudato, LInfonodo, SEM tosse, idade.");

add("F022","Criança de 10 anos, febre de 39 °C, exsudato tonsilar, linfonodo doloroso e sem tosse. Centor e conduta:",[
 ["5 pontos; testar e tratar com ATB se positivo","Correta. 4 ou 5 = provável bacteriano; exames documentam o GAS."],
 ["3 pontos; tratar só sintomáticos","São 5 pontos, não 3."],
 ["2 pontos; sem exames nem ATB","Subestima o escore."],
 ["5 pontos; dispensar qualquer antibiótico","Escore alto favorece ATB após confirmação."],
 ["1 ponto; provável quadro viral","Todos os critérios estão presentes."]
],"Some um a um: idade, febre, pus, gânglio, sem tosse.");

add("F023","Centor de -1 a +1 indica:",[
 ["Provável viral, sem exames nem ATB","Correta. Não há necessidade de investigação."],
 ["Provável bacteriano, ATB empírico","Isso seria para escores altos."],
 ["Quadro duvidoso, cultura obrigatória","Duvidoso é 2 ou 3."],
 ["Internação e ATB venoso","Não se aplica."],
 ["Teste rápido e penicilina sempre","Não se aplica a escore baixo."]
],"Baixo = vírus. 2 a 3 = testa. 4 a 5 = provável bactéria (testa e trata).");

add("F024","Qual é a primeira escolha para faringotonsilite estreptocócica?",[
 ["Penicilina benzatina IM dose única","Correta. Erradica o S. pyogenes; aplicar em ambiente com suporte."],
 ["Azitromicina oral por 5 dias","Macrolídeo é para alérgicos à penicilina."],
 ["Clindamicina oral por 10 dias","Reservada a episódios repetidos."],
 ["Ciprofloxacino oral por 7 dias","Não é citado."],
 ["Metronidazol oral por 7 dias","Cobre anaeróbios, não é primeira escolha aqui."]
],"Benzetacil: uma picada só, erradica o pyogenes.");

add("F025","Por via oral, a alternativa de 2ª escolha para faringite estreptocócica é:",[
 ["Penicilina V 10 dias ou amoxicilina 7 dias","Correta. Eficácia semelhante; o risco é a má adesão."],
 ["Amoxicilina 3 dias ou penicilina V 5 dias","Duração insuficiente."],
 ["Fluconazol 7 dias ou nistatina 10 dias","É antifúngico."],
 ["Aciclovir 7 dias ou valaciclovir 5 dias","É antiviral."],
 ["Penicilina V 3 dias ou amoxicilina 2 dias","Duração insuficiente."]
],"VO funciona igual, mas o paciente melhora em 2 a 3 dias e para por conta.");

add("F026","Paciente alérgico à penicilina com faringite estreptocócica. Opção adequada:",[
 ["Macrolídeo, como azitromicina","Correta. Também claritromicina ou roxitromicina."],
 ["Amoxicilina com clavulanato","É penicilina, contraindicada no alérgico."],
 ["Penicilina benzatina","Contraindicada na alergia."],
 ["Penicilina V oral","Contraindicada na alergia."],
 ["Ampicilina oral","É penicilina."]
],"Alergia a penicilina = macrolídeo.");

add("F027","Se a faringite estreptocócica não for tratada, o principal risco é:",[
 ["Ficar suscetível às complicações tardias","Correta. É autolimitada, mas pode gerar febre reumática, GNDA etc."],
 ["Óbito na maioria dos casos","O material diz que o paciente não vai morrer da faringite em si."],
 ["Cronificar sempre em 3 meses","Não é a consequência principal citada."],
 ["Evoluir para câncer de tonsila","Não há essa relação."],
 ["Desenvolver laringomalácia","Laringomalácia é congênita."]
],"Trata-se a faringite estreptocócica para evitar o depois (febre reumática).");

add("F028","Qual é a complicação supurativa mais comum da faringotonsilite por GAS?",[
 ["Abscesso peritonsilar","Correta. É complicação inicial das faringotonsilites agudas."],
 ["Abscesso retrofaríngeo","É extensão mais grave e menos comum."],
 ["Angina de Ludwig","Menos comum, celulite do assoalho."],
 ["Febre reumática","É complicação não supurativa."],
 ["Glomerulonefrite","É complicação não supurativa."]
],"Supurativa = pus = peritonsilar primeiro.");

add("F029","No abscesso peritonsilar, a coleção fica entre a tonsila e a parede lateral porque:",[
 ["A fáscia dos constritores atua como barreira","Correta. Impede a disseminação lateral da infecção."],
 ["A tonsila não tem cápsula","Não é a explicação dada."],
 ["O músculo masseter bloqueia a infecção","Não é a estrutura envolvida."],
 ["A adenoide drena para esse espaço","Não é o mecanismo."],
 ["A mandíbula limita a coleção","Não é a explicação."]
],"Constritor = muro que segura o pus ao lado da tonsila.");

add("F030","Faringite que piora abruptamente com dor unilateral irradiada à orelha, trismo e voz alterada sugere:",[
 ["Abscesso peritonsilar","Correta. Há abaulamento unilateral com desvio da tonsila para a linha média."],
 ["Mononucleose infecciosa","Causa hiperplasia bilateral, sem trismo típico."],
 ["Herpangina","Vesículas posteriores, sem abaulamento."],
 ["Faringite viral simples","Não causa trismo nem abaulamento."],
 ["Difteria","Placas pseudomembranosas, dor pouco intensa."]
],"Piorou de um lado + trismo + voz de batata quente = peritonsilar.");

add("F031","No abscesso peritonsilar, a TC é indicada para:",[
 ["Diferenciar celulite de abscesso e delimitar","Correta. Útil quando a oroscopia é difícil."],
 ["Confirmar a etiologia viral do quadro","TC não define agente."],
 ["Substituir a cultura do material drenado","A cultura identifica flora polimicrobiana."],
 ["Avaliar a função renal antes do ATB","Não tem relação."],
 ["Indicar penicilina benzatina ambulatorial","Não é a função da TC."]
],"TC no abscesso: celulite ou pus? até onde vai?");

add("F032","Qual é o tratamento do abscesso peritonsilar?",[
 ["Internação, ATB IV e drenagem transoral","Correta. ATB com cobertura de anaeróbios."],
 ["Penicilina benzatina ambulatorial","Insuficiente para abscesso."],
 ["Só analgesia e observação","O abscesso precisa de drenagem."],
 ["Tonsilectomia de urgência isolada","O padrão citado é ATB IV com drenagem."],
 ["Cervicotomia aberta de rotina","Essa é a via do laterofaríngeo."]
],"Abscesso = internar + antibiótico na veia + drenar pela boca.");

add("F033","Qual esquema antibiótico é adequado no abscesso peritonsilar?",[
 ["Penicilina + metronidazol","Correta. Amplia cobertura para anaeróbios."],
 ["Azitromicina isolada","Não cobre bem anaeróbios."],
 ["Nistatina + fluconazol","São antifúngicos."],
 ["Aciclovir + corticoide","Não tratam abscesso bacteriano."],
 ["Penicilina V oral isolada","Insuficiente para abscesso."]
],"Abscesso de garganta tem anaeróbio: some metronidazol ou clinda.");

add("F034","Abscesso laterofaríngeo é drenado preferencialmente por:",[
 ["Cervicotomia aberta","Correta. É a via mais realizada no laterofaríngeo."],
 ["Via transoral sob anestesia local","Usada no peritonsilar."],
 ["Punção nasal endoscópica","Não é a via citada."],
 ["Traqueostomia isolada","Pode ser necessária, mas não drena o abscesso."],
 ["Curetagem","É técnica de adenoidectomia."]
],"Lateral = pescoço aberto. Retro = pela boca.");

add("F035","Abscesso retrofaríngeo é drenado preferencialmente por via:",[
 ["Transoral, no centro cirúrgico","Correta. Paciente anestesiado; pode exigir traqueostomia."],
 ["Cervicotomia aberta","É a via do laterofaríngeo."],
 ["Endoscopia nasal com shaver","Técnica de adenoidectomia."],
 ["Punção cricotireoidea","É acesso de via aérea."],
 ["Sem drenagem, só ATB oral","Abscesso exige drenagem."]
],"RETROfaríngeo: drena pela boca, na parede posterior.");

add("F036","Comparado ao peritonsilar, o abscesso latero/retrofaríngeo apresenta:",[
 ["Dor cervical à mobilidade e dispneia mais intensa","Correta. Há mais comprometimento do estado geral e da consciência."],
 ["Quadro mais leve, tratado em ambulatório","É mais grave e exige internação."],
 ["Ausência de trismo e de disfagia","A restrição à abertura bucal é mais intensa."],
 ["Febre sempre ausente e estado geral bom","Não é característica."],
 ["Resolução só com analgesia e hidratação","Exige ATB IV e drenagem."]
],"Desceu para os espaços do pescoço: pescoço dói, ar falta.");

add("F037","A angina de Ludwig é:",[
 ["Celulite do assoalho bucal, raramente abscesso","Correta. ATB IV; drenagem só se necessário."],
 ["Abscesso entre tonsila e constritor","Isso é o peritonsilar."],
 ["Infecção da epiglote por Hib","Isso é supraglotite."],
 ["Úlcera unilateral por fusoespirilar","Isso é Plaut-Vincent."],
 ["Necrose gengival por anaeróbios","Isso é GUNA."]
],"Ludwig = assoalho da boca inchado, celulite.");

add("F038","As complicações não supurativas da faringite estreptocócica surgem tipicamente:",[
 ["2 a 3 semanas após a faringite","Correta. São imunológicas e tardias."],
 ["Nas primeiras 24 horas","Esse tempo é de complicações agudas."],
 ["Após 6 meses","Tempo excessivo."],
 ["Antes do início da dor de garganta","Surgem depois da infecção."],
 ["Só após a tonsilectomia","Não têm relação com cirurgia."]
],"Tardia = imune = 2 a 3 semanas depois.");

add("F039","Na febre reumática, a lesão tecidual decorre de:",[
 ["Anticorpos anti-proteína M com reação cruzada","Correta. Mimetismo molecular em predispostos (HLA-DR4, DR2)."],
 ["Toxina eritrogênica do estreptococo","Causa escarlatina."],
 ["Invasão direta do coração pela bactéria","O mecanismo é imunológico."],
 ["Deposição de imunocomplexos no rim","Esse é o mecanismo da GNDA."],
 ["Toxina diftérica cardiogênica","É mecanismo da difteria."]
],"Febre reumática: proteína M confunde o anticorpo, que ataca coração, articulação e cérebro.");

add("F040","Pelos critérios de Jones, o diagnóstico de febre reumática exige:",[
 ["2 maiores, ou 1 maior e 2 menores, com infecção prévia","Correta. A evidência de estreptococo é obrigatória."],
 ["1 maior isolado sem infecção prévia","Insuficiente."],
 ["3 menores, sem critério maior","Insuficiente."],
 ["ASLO elevado isolado","Indica infecção prévia, mas não fecha diagnóstico."],
 ["Cardite com cultura negativa e ASLO normal","Falta evidência de infecção prévia."]
],"Jones: 2M ou 1M+2m, sempre com prova do estreptococo.");

add("F041","Qual é critério MAIOR de Jones?",[
 ["Coreia de Sydenham","Correta. Junto com cardite, poliartrite, eritema marginado e nódulos."],
 ["Artralgia","É critério menor."],
 ["Febre acima de 38,5 °C","É critério menor."],
 ["VHS elevado","É critério menor laboratorial."],
 ["PR prolongado no ECG","É critério menor laboratorial."]
],"Maiores: CANCE (Cardite, Artrite, Nódulos, Coreia, Eritema marginado).");

add("F042","Sobre a poliartrite da febre reumática, é correto:",[
 ["É migratória e não deixa sequelas","Correta. Começa em grandes articulações e migra."],
 ["Deixa deformidade permanente","Não deixa sequelas; a cardite sim."],
 ["Acomete só pequenas articulações","Começa nas grandes."],
 ["É fixa em uma articulação","É migratória."],
 ["É tratada com haloperidol","Haloperidol é para coreia; artrite usa AAS."]
],"Artrite lambe as articulações (migra e cura); a cardite morde o coração (sequela).");

add("F043","Na febre reumática, o tratamento específico de cada manifestação é:",[
 ["Artrite: AAS; cardite: corticoide; coreia: haloperidol","Correta. Além da erradicação do estreptococo."],
 ["Artrite: corticoide; cardite: AAS; coreia: haloperidol","Artrite e cardite estão trocadas."],
 ["Artrite: haloperidol; cardite: AAS; coreia: corticoide","Associações trocadas."],
 ["Todas tratadas só com penicilina","A penicilina erradica, mas não trata as manifestações."],
 ["Artrite: AAS; cardite: AAS; coreia: corticoide","Cardite usa corticoide; coreia, haloperidol."]
],"AAS na junta, corticoide no coração, haloperidol no movimento.");

add("F044","Na profilaxia secundária da febre reumática, usa-se:",[
 ["Penicilina benzatina a cada 21 dias","Correta. A duração depende do grau de lesão cardíaca."],
 ["Amoxicilina diária por 7 dias","Não é o esquema de profilaxia citado."],
 ["Azitromicina mensal","Não é o esquema citado."],
 ["Penicilina benzatina dose única","Profilaxia é contínua."],
 ["AAS diário por toda a vida","AAS é para artrite, não profilaxia."]
],"Profilaxia: Benzetacil 21/21 dias.");

add("F045","Segundo a aula, paciente com febre reumática SEM lesão cardíaca faz profilaxia até:",[
 ["21 anos","Correta. Leve-moderada até 45 anos; grave por toda a vida."],
 ["45 anos","É para lesão leve a moderada."],
 ["Por toda a vida","É para lesão grave."],
 ["5 anos de idade","Não é o tempo citado."],
 ["Apenas 1 ano","Não é o tempo citado."]
],"Sem lesão 21, lesão leve/moderada 45, grave para sempre.");

add("F046","Na GNDA pós-estreptocócica, o achado laboratorial típico é:",[
 ["Hematúria dismórfica com C3 e CH50 baixos","Correta. Há consumo de complemento e cilindrúria."],
 ["Proteinúria maciça com C3 normal","Não é o padrão nefrítico citado."],
 ["Glicosúria sem hematúria","Não é achado da GNDA."],
 ["Linfocitose atípica","É da mononucleose."],
 ["ASLO negativo sempre","Não é achado típico."]
],"GNDA: urina com sangue dismórfico + complemento consumido + edema + HAS.");

add("F047","Na GNDA, a biópsia renal está indicada quando:",[
 ["A evolução é desfavorável","Correta. Avalia crescentes, que indicam pulsoterapia com corticoide."],
 ["Sempre, ao diagnóstico","Não é rotina."],
 ["Há edema periorbital","É achado típico, não indicação de biópsia."],
 ["O C3 está baixo","É esperado na GNDA."],
 ["Há hipertensão leve","É esperado e tratado clinicamente."]
],"Biópsia renal só se der errado; crescentes = corticoide.");

add("F048","Criança de 8 anos desenvolve TOC abrupto semanas após faringite estreptocócica. Hipótese:",[
 ["PANDAS","Correta. Distúrbio neuropsiquiátrico autoimune pós-estreptocócico."],
 ["PFAPA","PFAPA é febre periódica, não TOC."],
 ["Coreia de Huntington","Doença genética, sem relação com estreptococo."],
 ["Escarlatina","Causa rash e língua em framboesa."],
 ["Mononucleose","Causada pelo EBV, sem TOC."]
],"PANDAS: Pediátrico, Autoimune, Neuropsiquiátrico (TOC), Depois do Estreptococo.");

add("F049","Língua em framboesa e rash por toxinas eritrogênicas caracterizam:",[
 ["Escarlatina","Correta. Complicação rara, com vasculite sistêmica."],
 ["Síndrome do choque tóxico","Exige hipotensão e disfunção orgânica."],
 ["Herpangina","Vesículas no palato posterior."],
 ["Mononucleose","Hiperplasia linfoide e hepatoesplenomegalia."],
 ["Difteria","Placas pseudomembranosas aderentes."]
],"Escarlatina: framboesa na língua + rash.");

add("F050","A síndrome do choque tóxico estreptocócico exige:",[
 ["Hipotensão e 2 ou mais disfunções","Correta. Ex.: renal, coagulopatia, hepática, SARA, necrose, rash."],
 ["Febre e exsudato tonsilar apenas","Insuficiente."],
 ["Rash isolado com língua em framboesa","Lembra escarlatina."],
 ["Hematúria com C3 baixo","Lembra GNDA."],
 ["TOC de início abrupto","Lembra PANDAS."]
],"Choque = hipotensão + órgãos falhando (2 ou mais).");

add("F051","Placas pseudomembranosas aderentes às tonsilas, úvula e pilares, com dor pouco intensa e toxemia, sugerem:",[
 ["Difteria","Correta. Doença grave de notificação compulsória."],
 ["Faringite estreptocócica","Exsudato não é aderente e a dor é intensa."],
 ["Mononucleose","Exsudato amarelado, hepatoesplenomegalia."],
 ["Plaut-Vincent","Úlcera necrótica unilateral fétida."],
 ["Candidíase oral","Placas removíveis."]
],"Difteria: membrana grudada, dói pouco, intoxica muito.");

add("F052","Qual é a complicação temida da difteria citada no material?",[
 ["Insuficiência cardíaca aguda por toxina","Correta. A toxina diftérica é cardiogênica."],
 ["Glomerulonefrite por imunocomplexo","É complicação do GAS."],
 ["Coreia de Sydenham","É manifestação da febre reumática."],
 ["Ruptura esplênica","É risco da mononucleose."],
 ["Abscesso peritonsilar","É complicação do GAS."]
],"Toxina diftérica mira o coração.");

add("F053","No tratamento da difteria, o soro antidiftérico serve para:",[
 ["Reduzir toxina circulante e prevenir complicações","Correta. Previne miocardite, neurite e nefropatia."],
 ["Erradicar a bactéria da orofaringe e pilares","Isso é função do antibiótico."],
 ["Substituir o antibiótico no tratamento","O ATB (penicilina ou eritromicina) é mantido."],
 ["Vacinar os contatos domiciliares do caso","Soro não é vacina."],
 ["Tratar a febre e a dor de garganta","Não é a função do soro."]
],"Soro = antitoxina. Antibiótico = antibactéria. Os dois juntos.");

add("F054","Qual faringotonsilite é tipicamente UNILATERAL, ulceronecrótica e fétida?",[
 ["Plaut-Vincent (fusoespirilar)","Correta. Uma das únicas com comprometimento unilateral."],
 ["Difteria","Placas bilaterais aderentes."],
 ["Mononucleose","Hiperplasia bilateral."],
 ["Faringite estreptocócica","Exsudato bilateral."],
 ["Herpangina","Vesículas posteriores difusas."]
],"Plaut-Vincent: um lado só, podre, em quem tem dente ruim.");

add("F055","Plaut-Vincent é causada por:",[
 ["Fusobactéria e espiroqueta de foco dentário","Correta. Fatores: má higiene, desnutrição, alcoolismo."],
 ["Corynebacterium diphtheriae toxigênico","Causa difteria."],
 ["Streptococcus pyogenes do grupo A","Causa faringite estreptocócica."],
 ["Vírus Epstein-Barr em adolescentes","Causa mononucleose."],
 ["Coxsackie A por via fecal-oral","Causa herpangina."]
],"Fuso + espiroqueta = fusoespirilar.");

add("F056","Segundo o professor, qual antibiótico serve para Plaut-Vincent?",[
 ["Penicilina com inibidor de beta-lactamase","Correta. Ou cefalosporina, ou clindamicina. O Tratado associa metronidazol."],
 ["Azitromicina isolada por 5 dias","Não é citada."],
 ["Fluconazol oral por 14 dias","É antifúngico."],
 ["Aciclovir oral de 4 em 4 horas","É antiviral."],
 ["Isoniazida com rifampicina","É antituberculoso."]
],"Anaeróbio de dente: cobre com clavulanato, cefalosporina ou clinda.");

add("F057","A herpangina caracteriza-se por:",[
 ["Vesículas em tonsilas, palato mole e úvula","Correta. Coxsackie A, transmissão fecal-oral, autolimitada."],
 ["Placas aderentes com dor leve","Isso é difteria."],
 ["Úlcera unilateral necrótica","Isso é Plaut-Vincent."],
 ["Gengivoestomatite em toda a boca","Isso é herpes primário."],
 ["Hiperplasia tonsilar com dispneia","Isso é mononucleose."]
],"Herpangina: vesículas lá atrás (posterior).");

add("F058","Qual é a via de transmissão da herpangina?",[
 ["Fecal-oral","Correta. Coxsackie do grupo A ou enterovírus."],
 ["Gotículas apenas","Não é a via citada."],
 ["Sexual","Não é a via citada."],
 ["Sangue","Não é a via citada."],
 ["Picada de inseto","Não é a via citada."]
],"Entero-vírus = intestino = fecal-oral.");

add("F059","Na mononucleose, qual teste é específico para o EBV?",[
 ["Anti-VCA (IgM e IgG)","Correta. Anticorpos contra o capsídeo viral."],
 ["Paul-Bunnell-Davidson","É teste de anticorpos heterófilos, menos específico."],
 ["ASLO","É para estreptococo."],
 ["VDRL","É para sífilis."],
 ["Teste rápido para GAS","É para estreptococo."]
],"VCA = Viral Capsid Antigen = específico.");

add("F060","Na mononucleose, por que se orienta evitar esforço físico?",[
 ["Risco de ruptura da cápsula esplênica","Correta. Há hepatoesplenomegalia, sobretudo da 2ª à 4ª semana."],
 ["Risco de febre reumática","Não é complicação do EBV."],
 ["Risco de abscesso peritonsilar","Não é a razão do repouso."],
 ["Risco de hipoglicemia","Não é citado."],
 ["Risco de laringomalácia","Não tem relação."]
],"Baço grande = sem esporte.");

add("F061","Na mononucleose, corticoide IV está indicado quando:",[
 ["Há hiperplasia com comprometimento respiratório","Correta. Pode até exigir traqueostomia de urgência."],
 ["Sempre, para encurtar a febre e a dor","Não é rotina."],
 ["Há linfonodos cervicais e axilares","São esperados."],
 ["Há aftas orais e petéquias no palato","Não é indicação."],
 ["O anti-VCA IgM vem positivo no exame","Confirma o diagnóstico, não indica corticoide."]
],"Corticoide na mono só se a amígdala fechar a via aérea.");

add("F062","Na mononucleose, o hemograma típico mostra:",[
 ["Linfocitose atípica acima de 20%","Correta. Linfócitos B imaturos no sangue."],
 ["Neutrofilia com desvio à esquerda","Sugere bactéria."],
 ["Eosinofilia acima de 20%","Não é o achado."],
 ["Plaquetose acima de 1 milhão","Não é o achado."],
 ["Leucopenia com neutrófilos tóxicos","Não é o achado descrito."]
],"Mono = muitos linfócitos estranhos.");

add("F063","Na faringotonsilite crônica recorrente, o antibiótico de escolha segundo o Tratado é:",[
 ["Amoxicilina","Correta. Refratários: amoxicilina com clavulanato."],
 ["Penicilina benzatina 21/21 dias","É profilaxia da febre reumática."],
 ["Metronidazol isolado","Não é a escolha citada."],
 ["Fluconazol","É antifúngico."],
 ["Ciprofloxacino","Não é citado."]
],"Recorrente: amoxicilina; não funcionou, clavulanato.");

add("F064","O lisado bacteriano, imunomodulador na tonsilite recorrente, é administrado:",[
 ["10 dias, pausa de 20, por 3 ciclos","Correta. Via oral, em cápsula ou sachê."],
 ["Diariamente por 3 meses seguidos","Esse é o esquema da timomodulina."],
 ["Dose única intramuscular","Não é o esquema."],
 ["A cada 21 dias por 5 anos","Lembra profilaxia da febre reumática."],
 ["Só durante as crises febris","Não é o esquema."]
],"Lisado: 10 sim, 20 não, três vezes. Timomodulina: todo dia por 3 meses.");

add("F065","Pelos critérios de Paradise, indica tonsilectomia:",[
 ["7 ou mais infecções bacterianas em 1 ano","Correta. Ou 5/ano em 2 anos, ou 3/ano em 3 anos."],
 ["3 infecções em 1 ano","Insuficiente; 3/ano precisa de 3 anos seguidos."],
 ["5 infecções em 1 ano isolado","5/ano precisa de 2 anos seguidos."],
 ["2 infecções por ano em 5 anos","Não está nos critérios."],
 ["1 abscesso e 1 faringite no ano","Não está nos critérios de Paradise."]
],"Paradise: 7-5-3 (7 em 1 ano, 5 em 2 anos, 3 em 3 anos).");

add("F066","Criança de 3 anos com febre a cada 4 semanas por 4 dias, aftas, faringite e adenite, saudável entre crises. Hipótese:",[
 ["PFAPA","Correta. Causa mais comum de febre periódica na infância."],
 ["Faringite estreptocócica recorrente","Não segue periodicidade regular nem há criança assintomática padronizada."],
 ["Doença de Behçet","Tríade com aftas genitais e uveíte."],
 ["Mononucleose","Não é periódica."],
 ["PANDAS","Cursa com TOC, não febre periódica."]
],"PFAPA: Febre Periódica, Aftas, Faringite, Adenite. Relógio de 3 a 8 semanas.");

add("F067","Qual o tratamento da crise de PFAPA?",[
 ["Corticoide (prednisona 1 a 2 mg/kg)","Correta. Resolução rápida; antibiótico não tem efeito."],
 ["Amoxicilina por 10 dias na crise","PFAPA não é bacteriana."],
 ["Penicilina benzatina dose única","Sem efeito, não é infecção."],
 ["Aciclovir oral de 4 em 4 horas","Não é viral."],
 ["Tonsilectomia de urgência na crise","Não é tratamento da crise."]
],"PFAPA some com corticoide; antibiótico não faz nada.");

add("F068","Qual é a principal causa de apneia obstrutiva na infância?",[
 ["Hiperplasia de tonsilas palatinas e adenoide","Correta. Faringotonsilite crônica hiperplásica."],
 ["Laringomalácia do lactente","Causa estridor no lactente, não a principal apneia."],
 ["Obesidade infantil isolada","Não é a causa principal citada."],
 ["Estenose subglótica congênita","É causa de estridor, mais rara."],
 ["Desvio de septo nasal grave","Não é a principal causa citada."]
],"Criança que ronca e para de respirar: amígdala e adenoide.");

add("F069","Tonsilas palatinas ocupando entre 50% e 75% da orofaringe correspondem ao grau:",[
 ["3","Correta. Graus 3 e 4 geram sintomas mais significativos."],
 ["1","Grau 1 é até 25%."],
 ["2","Grau 2 é de 25% a 50%."],
 ["4","Grau 4 é acima de 75%."],
 ["0","Grau 0 fica dentro da fossa tonsilar."]
],"Cada grau = 25% a mais da orofaringe.");

add("F070","Ao graduar tonsilas na oroscopia, a língua deve ficar:",[
 ["Dentro da boca, sem protrusão","Correta. Protrusa ou retraída pode falsear o tamanho."],
 ["Totalmente protrusa","Pode falsear o exame."],
 ["Puxada com gaze para fora","Não é a orientação."],
 ["Elevada contra o palato","Impede a visualização."],
 ["Retraída ao máximo","Pode falsear o exame."]
],"Língua quieta dentro da boca; abaixador só se não der para ver.");

add("F071","Para avaliar a adenoide (tonsila faríngea), quais exames são citados?",[
 ["Endoscopia nasal e RX de crânio em perfil","Correta. Gradua pela obstrução da coana e da coluna aérea."],
 ["Oroscopia simples","A adenoide não é visível na oroscopia."],
 ["Laringoscopia indireta com espelho","Avalia laringe."],
 ["USG cervical","Não é o exame citado."],
 ["Estroboscopia","Avalia vibração das pregas vocais."]
],"Adenoide se vê pelo nariz (endoscopia) ou de perfil (RX).");

add("F072","Halitose, sensação de corpo estranho e massas pútridas nas criptas sugerem:",[
 ["Faringotonsilite crônica caseosa","Correta. Fibrose fecha as criptas e acumula caseum."],
 ["Faringotonsilite hiperplásica","Caracteriza-se por aumento de volume."],
 ["Abscesso peritonsilar","Quadro agudo com trismo e abaulamento."],
 ["PFAPA","Febre periódica sem caseum."],
 ["Difteria","Placas aderentes com toxemia."]
],"Caseum = bolinha fedida na amígdala.");

add("F073","Qual é indicação ABSOLUTA de tonsilectomia?",[
 ["Hiperplasia tonsilar com apneia","Correta. Também cor pulmonale e hiperplasia com disfagia."],
 ["Faringotonsilite recorrente","É indicação relativa."],
 ["Passado de abscesso peritonsilar","É indicação relativa."],
 ["Faringotonsilite crônica","É indicação relativa."],
 ["Halitose isolada","Não é indicação absoluta."]
],"Absoluta = obstrução grave (apneia, disfagia, cor pulmonale). Infecção = relativa.");

add("F074","No pós-operatório de tonsilectomia, é correto:",[
 ["Cicatrização por 2ª intenção, dieta pastosa e fria","Correta. A ferida fica aberta; sorvete e açaí sem complementos."],
 ["Ferida suturada e dieta livre desde o 1º dia","A ferida fica aberta e alimentos duros são evitados."],
 ["Dieta quente e sólida para estimular a loja","Contrário à orientação."],
 ["Granola e castanhas ajudam a limpar a loja","Complementos duros são evitados."],
 ["Falar bastante acelera a cicatrização local","Orienta-se evitar falar muito."]
],"Pós-amigdalectomia: frio, mole, quieto.");

add("F075","Qual é indicação de adenoidectomia isolada?",[
 ["Adenoidite crônica com otite média de repetição","Correta. Também sinusite de repetição ou obstrução da VAS."],
 ["Faringite estreptocócica única no ano","Não é indicação."],
 ["Abscesso peritonsilar prévio unilateral","Relaciona-se a tonsilectomia."],
 ["Laringomalácia leve com estridor","Não tem relação."],
 ["Nódulo vocal em criança que grita","Não tem relação."]
],"Adenoide grande tapa a tuba (otite) e a coana (sinusite, obstrução).");

add("F076","Qual é a técnica mais comum de adenoidectomia?",[
 ["Curetagem","Correta. Remove a adenoide inteira."],
 ["Shaver nasal endoscópico","É alternativa, não a mais comum."],
 ["Laser de CO2 transoral","Não é a mais citada."],
 ["Cervicotomia","Não se aplica."],
 ["Crioterapia","Não se aplica."]
],"Adenoide: cureta.");

add("F077","Qual é CONTRAINDICAÇÃO à tonsilectomia/adenoidectomia?",[
 ["Fenda palatina ou fenda submucosa","Correta. Também coagulopatias e insuficiência velopalatina."],
 ["Apneia obstrutiva do sono","É indicação, não contraindicação."],
 ["Otite média de repetição","É indicação de adenoidectomia."],
 ["Passado de abscesso peritonsilar","É indicação relativa."],
 ["Idade escolar","Não é contraindicação."]
],"Não operar: sangra (coagulopatia) ou véu palatino insuficiente (fenda, palato curto).");

add("F078","Hiperplasia tonsilar aguda ASSIMÉTRICA, em idoso tabagista com perda ponderal, sugere:",[
 ["Neoplasia (linfoma ou CEC)","Correta. Assimetria e sinais sistêmicos levantam suspeita."],
 ["Faringite viral simples","Viral é simétrica."],
 ["Hiperplasia benigna da infância","Não combina com idoso tabagista."],
 ["PFAPA","Ocorre em crianças."],
 ["Mononucleose","Causa hiperplasia simétrica em jovens."]
],"Amígdala de um lado só em idoso = biopsiar.");

})();
