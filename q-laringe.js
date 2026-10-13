// Banco: Laringe. Em cada questão a PRIMEIRA alternativa é a correta (o app embaralha).
(function(){
var T = "Laringe";
function add(id, e, alts, m){
  window.QUESTOES.push({ id:id, tema:T, enunciado:e, macete:m,
    alternativas: alts.map(function(a,i){ return { t:a[0], porque:a[1], ok:i===0 }; }) });
}

add("L001","A supraglote estende-se:",[
 ["Da epiglote à borda superior das pregas vocais","Correta. É importante para a proteção da via aérea."],
 ["Da borda inferior das pregas à traqueia","Essa é a subglote."],
 ["Do espaço entre as duas pregas vocais","Essa é a glote."],
 ["Da cartilagem cricoide até a carina","Não é região laríngea descrita."],
 ["Do osso hioide até a base da língua","Não é a definição de supraglote."]
],"Supra = acima das cordas; Glote = nas cordas; Sub = abaixo, rumo à traqueia.");

add("L002","Qual região da laringe é responsável pela produção da voz?",[
 ["Glote","Correta. Abertura entre as pregas vocais."],
 ["Supraglote","Atua sobretudo na proteção da via aérea."],
 ["Subglote","Faz a transição para a traqueia."],
 ["Valécula","Pertence à orofaringe."],
 ["Seio piriforme","Pertence à hipofaringe."]
],"Voz nasce na glote.");

add("L003","Qual região marca a transição entre via aérea superior e inferior?",[
 ["Subglote","Correta. Continua com a traqueia."],
 ["Supraglote","Fica acima das pregas vocais."],
 ["Glote","É a região das pregas vocais."],
 ["Nasofaringe","Fica bem acima, atrás do nariz."],
 ["Orofaringe","Fica atrás da boca."]
],"Subglote é a porta da traqueia.");

add("L004","Sobre o osso hioide, é correto:",[
 ["Único osso da laringe, sem articulação óssea","Correta. Serve de fixação para músculos da língua e do pescoço."],
 ["Articula-se diretamente com a mandíbula","Não se articula diretamente com nenhum osso."],
 ["Forma o pomo de Adão nos homens adultos","O pomo de Adão é a cartilagem tireoide."],
 ["Circunda completamente a laringe em anel","Isso é a cricoide."],
 ["É uma cartilagem elástica e não um osso","É osso."]
],"Hioide: osso solitário, \"boia\" no pescoço.");

add("L005","Quantas cartilagens compõem o arcabouço laríngeo?",[
 ["9","Correta. 3 ímpares (tireoide, cricoide, epiglote) e 3 pares."],
 ["6","Faltam as pares contadas duas vezes."],
 ["3","São só as ímpares."],
 ["12","Não é o número descrito."],
 ["7","Não é o número descrito."]
],"3 ímpares + 3 pares x2 = 9.");

add("L006","Qual é a única cartilagem que circunda completamente a laringe?",[
 ["Cricoide, em anel de sinete","Correta. É a base de sustentação."],
 ["Tireoide, em escudo","É escudo anterior, não anel completo."],
 ["Epiglote, em folha","É aba em folha."],
 ["Aritenoide, em pirâmide","É pequena e móvel."],
 ["Cuneiforme, alongada","Fica na prega ariepiglótica."]
],"Cricoide = anel completo (anel de sinete).");

add("L007","Qual é a maior cartilagem da laringe?",[
 ["Tireoide","Correta. Forma o pomo de Adão nos homens."],
 ["Cricoide","É a base, mas não a maior."],
 ["Epiglote","Não é a maior."],
 ["Aritenoide","É pequena."],
 ["Corniculada","É pequena, em cone."]
],"Tireoide = escudo grande = gogó.");

add("L008","As aritenoides são importantes porque:",[
 ["São móveis e ajustam posição e tensão das pregas","Correta. Têm articulações verdadeiras, sujeitas a doenças articulares."],
 ["Formam o pomo de Adão na face anterior","Isso é a tireoide."],
 ["Fecham a laringe como tampa ao engolir","Isso é a epiglote."],
 ["São a base imóvel que sustenta a laringe","A base é a cricoide."],
 ["São o único componente ósseo da laringe","O único osso é o hioide."]
],"Aritenoide = dobradiça da prega vocal.");

add("L009","As cartilagens corniculadas:",[
 ["Articulam-se com os ápices das aritenoides","Correta. São pequenas, elásticas, em cone."],
 ["Ficam dentro da prega ariepiglótica","Essas são as cuneiformes."],
 ["Formam o anel de sinete da laringe","Isso é a cricoide."],
 ["Fecham a laringe durante a deglutição","Isso é a epiglote."],
 ["Formam o pomo de Adão nos homens","Isso é a tireoide."]
],"Corniculada = chifrinho em cima da aritenoide.");

add("L010","Onde é realizada a cricotireoidostomia?",[
 ["Membrana cricotireoidea","Correta. Liga cricoide e tireoide na laringe anterior."],
 ["Membrana tireohioidea","Liga tireoide ao hioide."],
 ["Membrana quadrangular","Fica no interior, da epiglote à prega vestibular."],
 ["Cone elástico","Estrutura interna ligada ao ligamento vocal."],
 ["Ligamento glossoepiglótico","Liga epiglote à língua."]
],"O nome já entrega: cricotireoidostomia = membrana cricotireoidea.");

add("L011","Qual é a função das membranas laríngeas, além de unir cartilagens?",[
 ["Barreira contra extensão de neoplasias","Correta. Principalmente quadrangular e triangular."],
 ["Produzir o muco que reveste a laringe","Não é a função citada."],
 ["Conduzir a inervação das pregas vocais","Membrana não inerva."],
 ["Produzir a voz por vibração própria","A voz nasce da vibração das pregas."],
 ["Filtrar as partículas do ar inspirado","Função do epitélio ciliado."]
],"Membranas: unem e servem de muro contra o tumor.");

add("L012","A borda medial do cone elástico corresponde ao:",[
 ["Ligamento vocal","Correta. O cone ajuda a criar a pressão subglótica."],
 ["Ligamento ariepiglótico","Forma a prega ariepiglótica."],
 ["Ligamento glossoepiglótico","Liga epiglote à língua."],
 ["Músculo cricotireoideo","É músculo externo."],
 ["Prega vestibular","Relaciona-se à membrana quadrangular."]
],"Cone elástico termina em cima no ligamento vocal.");

add("L013","A membrana quadrangular vai da borda da epiglote até:",[
 ["A prega vestibular (falsa corda)","Correta. Define o limite interno da laringe."],
 ["O corpo do osso hioide","Isso é a tireohioidea."],
 ["A borda da cartilagem cricoide","Não é a quadrangular."],
 ["O primeiro anel da traqueia","Não é a quadrangular."],
 ["A base da língua (valécula)","Isso é o ligamento glossoepiglótico."]
],"Quadrangular termina na prega falsa.");

add("L014","Os ligamentos ariepiglóticos:",[
 ["Ligam aritenoides à epiglote e formam a prega","Correta. Formam a prega ariepiglótica."],
 ["Ligam a epiglote à base da língua","Isso é o glossoepiglótico."],
 ["Ligam a cartilagem tireoide à epiglote","Isso é o tiroepiglótico."],
 ["Ligam a cricoide à tireoide anteriormente","Isso é a membrana cricotireoidea."],
 ["Ligam a tireoide ao osso hioide","Isso é a membrana tireohioidea."]
],"Ari-epiglótico: aritenoide até epiglote.");

add("L015","Sobre as pregas vocais falsas (vestibulares), é correto:",[
 ["Papel mínimo na fala; protegem a via aérea","Correta. Fecham-se na deglutição, tosse e engasgo."],
 ["São as responsáveis pelos fonemas","Isso é das pregas verdadeiras."],
 ["Contêm o músculo vocal","O tireoaritenoideo está nas verdadeiras."],
 ["Ficam abaixo das pregas verdadeiras","Ficam acima (superiores)."],
 ["São as únicas que se aproximam","Só as verdadeiras se aproximam."]
],"Falsa = de cima, protege. Verdadeira = de baixo, fala.");

add("L016","As pregas vocais verdadeiras são compostas por:",[
 ["Ligamento vocal, músculo vocal e mucosa","Correta. Mucosa facilita a vibração; músculo ajusta tensão."],
 ["Cartilagem cuneiforme e mucosa","Cuneiforme está na prega ariepiglótica."],
 ["Músculo cricotireoideo e ligamento","O CT é externo."],
 ["Apenas mucosa respiratória ciliada","Têm epitélio estratificado pavimentoso."],
 ["Tecido linfoide e mucosa","Não é a composição."]
],"Prega verdadeira = ligamento + músculo TA + mucosa.");

add("L017","Qual é o ÚNICO músculo abdutor da laringe?",[
 ["Cricoaritenoideo posterior","Correta. \"Músculo da vida\": abre as pregas para respirar."],
 ["Cricoaritenoideo lateral","É adutor anterior."],
 ["Aritenoideo transverso","É adutor posterior."],
 ["Tireoaritenoideo","É o músculo vocal."],
 ["Cricotireoideo","Tensiona as pregas."]
],"Posterior abre a Porta (CAP). Sem ele, não respira.");

add("L018","Qual músculo é o principal regulador da tensão das pregas e eleva a frequência da voz?",[
 ["Cricotireoideo","Correta. Abaixa a tireoide e estica as pregas: voz aguda."],
 ["Cricoaritenoideo posterior","É abdutor."],
 ["Cricoaritenoideo lateral","É adutor anterior."],
 ["Aritenoideo oblíquo","É adutor posterior."],
 ["Tireoaritenoideo","Ao contrair, relaxa a mucosa."]
],"CT estica a corda de violão: som agudo.");

add("L019","Qual é o único músculo laríngeo exposto, situado fora da laringe?",[
 ["Cricotireoideo","Correta. Por estar exposto, pode sofrer traumas."],
 ["Tireoaritenoideo","Fica na parte medial, formando a prega."],
 ["Cricoaritenoideo posterior","Fica dentro, posterior."],
 ["Cricoaritenoideo lateral","É interno."],
 ["Aritenoideo transverso","Fica entre as aritenoides."]
],"CT: o de fora, o do agudo, o do laríngeo superior.");

add("L020","Sobre o músculo tireoaritenoideo (vocal), é correto:",[
 ["Ao contrair, relaxa a mucosa; antagoniza o CT","Correta. O balanço TA e CT define timbres."],
 ["Ao contrair, estica a mucosa","Contraído, ele relaxa a mucosa."],
 ["É o único abdutor","O abdutor é o CAP."],
 ["Fica fora da laringe","Forma o corpo das pregas vocais."],
 ["É inervado pelo laríngeo superior externo","Este inerva só o CT."]
],"TA contrai = corda frouxa (grave). CT contrai = corda esticada (agudo).");

add("L021","Os músculos aritenoideos oblíquo e transverso têm função de:",[
 ["Aduzir a parte posterior das pregas","Correta. Fecham para falar e engolir."],
 ["Abduzir as pregas para respirar","Isso é o CAP."],
 ["Tensionar as pregas e elevar a frequência","Isso é o CT."],
 ["Aduzir a parte anterior das pregas","Isso é o CAL."],
 ["Elevar o osso hioide","Não é função descrita."]
],"Aritenoideos fecham atrás; CAL fecha na frente.");

add("L022","O músculo cricoaritenoideo lateral:",[
 ["Roda as aritenoides para dentro (adutor anterior)","Correta. Fecha a parte anterior das pregas."],
 ["Roda as aritenoides para fora (abdutor)","Isso é o CAP."],
 ["Estica as pregas e eleva a frequência","Isso é o CT."],
 ["Forma o corpo muscular da prega vocal","Isso é o TA."],
 ["É o músculo da vida, que abre a glote","Esse é o CAP."]
],"CAL = Lateral, Leva para dentro, fecha a frente.");

add("L023","A abdução das pregas vocais permite:",[
 ["Respiração (passagem de ar)","Correta. A adução permite a fonação."],
 ["Fonação","Fonação exige adução."],
 ["Deglutição segura","Deglutição exige fechamento."],
 ["Tosse eficaz no fechamento","Tosse envolve fechamento seguido de abertura."],
 ["Voz aguda","Frequência depende de tensão, não de abdução."]
],"ABdução = ABre = ar. ADução = fecha = fala.");

add("L024","O nervo laríngeo superior, ramo externo, inerva:",[
 ["O músculo cricotireoideo","Correta. O ramo interno dá sensibilidade."],
 ["Todos os músculos intrínsecos","Isso é o recorrente, exceto o CT."],
 ["O cricoaritenoideo posterior","É inervado pelo recorrente."],
 ["A mucosa subglótica apenas","Não é a descrição."],
 ["Os músculos da língua","Função do hipoglosso."]
],"Superior externo = só o CT. Recorrente = todo o resto.");

add("L025","Lesão do nervo laríngeo recorrente pode causar:",[
 ["Paralisia das pregas vocais","Correta. Ele inerva todos os intrínsecos, exceto o CT."],
 ["Perda isolada da sensibilidade","Sensibilidade é do laríngeo superior interno."],
 ["Paralisia só do cricotireoideo","O CT é do laríngeo superior externo."],
 ["Perda do paladar","Não tem relação."],
 ["Paralisia facial","É do nervo facial."]
],"Recorrente lesado (ex.: tireoidectomia) = prega parada.");

add("L026","Ambos os nervos laríngeos são ramos de qual par craniano?",[
 ["X (vago)","Correta."],
 ["IX (glossofaríngeo)","Não origina os laríngeos."],
 ["XII (hipoglosso)","É motor da língua."],
 ["VII (facial)","Não inerva a laringe."],
 ["V (trigêmeo)","Não inerva a laringe."]
],"Laringe = vago.");

add("L027","Qual epitélio reveste as pregas vocais verdadeiras?",[
 ["Estratificado pavimentoso","Correta. Protege contra o atrito."],
 ["Respiratório ciliado","Reveste as outras partes da laringe."],
 ["Cúbico simples","Não é o descrito."],
 ["Transicional","Não é o descrito."],
 ["Colunar simples sem cílios","Não é o descrito."]
],"Onde há atrito, epitélio pavimentoso (como a pele).");

add("L028","A camada superficial da lâmina própria das pregas vocais:",[
 ["Atua como gel que permite o deslizamento","Correta. Tem colágeno e elastina."],
 ["Tem fibras densas ancoradas no músculo","Essa é a profunda."],
 ["É a mais rica em fibras elásticas","Essa é a intermediária."],
 ["É composta só de músculo","Lâmina própria é tecido conjuntivo."],
 ["Não participa da vibração","É fundamental para a vibração."]
],"Superficial = gel, Intermediária = elástico, Profunda = âncora.");

add("L029","Na lâmina própria, o ácido hialurônico tem a função de:",[
 ["Manter hidratação e elasticidade","Correta."],
 ["Organizar as fibras de colágeno","Função da decorina e fibromodulina."],
 ["Ancorar o epitélio ao músculo","Não é a função citada."],
 ["Produzir muco","Não é a função citada."],
 ["Gerar contração muscular","Não é a função citada."]
],"Hialurônico = água = elasticidade.");

add("L030","Qual é a principal função da laringe?",[
 ["Respiração (condução do ar)","Correta. Fonação e deglutição são as outras funções."],
 ["Fonação (produção da voz)","Importante, mas não a principal citada."],
 ["Deglutição (proteção)","Função de proteção, não a principal."],
 ["Paladar (gustação)","Não é função da laringe."],
 ["Olfato retronasal","Não é função da laringe."]
],"Laringe primeiro deixa respirar; falar é bônus.");

add("L031","Qual mecanismo protege a via aérea na deglutição?",[
 ["Fechamento das pregas, elevação laríngea e epiglote","Correta. O fechamento das pregas é o principal."],
 ["Abdução das pregas e descida da laringe","Abrir as pregas expõe a via aérea."],
 ["Relaxamento do cricotireoideo e da epiglote","Não protege a via aérea."],
 ["Abertura da tuba auditiva e do palato","Não tem relação com proteção laríngea."],
 ["Descida da laringe com glote aberta","A laringe sobe na deglutição."]
],"Engolir: laringe sobe, pregas fecham, epiglote tampa.");

add("L032","Pela teoria mioelástica-aerodinâmica, quais forças fecham as pregas vocais?",[
 ["Elasticidade das pregas e efeito de Bernoulli","Correta. A força de abertura é a pressão subglótica."],
 ["Pressão subglótica e contração do diafragma","A pressão subglótica abre as pregas."],
 ["Contração do cricoaritenoideo posterior","O CAP abre as pregas."],
 ["Ressonância nasal e da cavidade oral","Modifica o som, não fecha as pregas."],
 ["Gravidade e peso da saliva sobre as pregas","Não fazem parte da teoria."]
],"Ar abre; elasticidade + Bernoulli (vácuo) fecham. O ciclo gera o som.");

add("L033","Na teoria mioelástica-aerodinâmica, a força de ABERTURA das pregas é:",[
 ["A pressão subglótica","Correta. O ar dos pulmões força as pregas fechadas a se abrir."],
 ["O efeito de Bernoulli","Bernoulli ajuda a fechar."],
 ["A elasticidade das pregas","A elasticidade ajuda a fechar."],
 ["A articulação dos lábios","Atua na modificação do som."],
 ["A ressonância oral","Atua na modificação do som."]
],"Pressão de baixo empurra e abre.");

add("L034","A frequência da voz (agudo ou grave) depende principalmente de:",[
 ["Grau de tensão das pregas vocais","Correta. Alta frequência é som agudo."],
 ["Amplitude da vibração","Determina intensidade (volume)."],
 ["Volume da cavidade nasal","Relaciona-se à ressonância."],
 ["Posição da língua","Relaciona-se à articulação."],
 ["Altura do paciente","Não é o controle citado."]
],"Hz = tensão (agudo/grave). dB = amplitude (volume).");

add("L035","A intensidade (volume) da voz relaciona-se a:",[
 ["Amplitude, medida em decibéis","Correta. Maior amplitude, voz mais forte."],
 ["Frequência, medida em hertz","Hertz mede frequência."],
 ["Tensão do cricotireoideo","Define frequência."],
 ["Epitélio ciliado","Não define intensidade."],
 ["Tamanho da epiglote","Não define intensidade."]
],"Volume = dB = amplitude.");

add("L036","Na fala, a ressonância e a articulação servem para:",[
 ["Modificar o som laríngeo em fala","Correta. Cavidades amplificam; lábios, língua e dentes articulam."],
 ["Gerar a pressão subglótica","Isso vem dos pulmões e do diafragma."],
 ["Abrir as pregas vocais","Isso é a pressão subglótica."],
 ["Proteger a via aérea","Não é a função descrita."],
 ["Inervar a laringe","Sem relação."]
],"Laringe faz o zumbido; boca, nariz e faringe fazem a palavra.");

add("L037","Qual exame analisa a vibração das pregas vocais em câmera lenta?",[
 ["Telelaringoestroboscopia","Correta. Avalia onda mucosa, simetria, fechamento, periodicidade."],
 ["Laringoscopia indireta com espelho","Visão estática simples."],
 ["Nasofibroscopia flexível","Dinâmica, mas sem câmera lenta."],
 ["Tomografia computadorizada","Avalia estruturas e tumores."],
 ["Eletromiografia laríngea","Avalia atividade elétrica muscular."]
],"Estrobo = luz piscando = câmera lenta.");

add("L038","Qual parâmetro é avaliado na estroboscopia?",[
 ["Onda mucosa","Correta. Junto com Fo, amplitude, fechamento, simetria e periodicidade."],
 ["Pressão arterial","Não é parâmetro laríngeo."],
 ["pH esofágico","É da pH-metria."],
 ["Atividade elétrica muscular","É da eletromiografia."],
 ["Densidade óssea do hioide","Não é avaliada."]
],"Estrobo vê a mucosa ondulando.");

add("L039","Qual exame é muito usado para avaliar pregas vocais e refluxo, introduzido pelo nariz?",[
 ["Nasofibroscopia flexível","Correta. Permite ver a laringe durante fala e respiração."],
 ["Telelaringoscopia rígida","É introduzida pela boca."],
 ["Laringoscopia direta","Feita com suspensão e microscópio."],
 ["Laringoscopia indireta com espelho","Espelho no fundo da boca."],
 ["Videoquimografia","Análise de vídeo da vibração."]
],"Naso-fibro: pelo nariz, flexível, dinâmico.");

add("L040","Qual exame permite procedimentos terapêuticos na laringe?",[
 ["Laringoscopia direta de suspensão","Correta. Com microscópio ou endoscópio longo."],
 ["Laringoscopia indireta com espelho","Só diagnóstica, no consultório."],
 ["Nasofibroscopia flexível","Principalmente diagnóstica."],
 ["Avaliação acústica da voz","Mede parâmetros acústicos."],
 ["Ressonância magnética","Exame de imagem."]
],"Direta + suspensão = dá para operar.");

add("L041","A eletromiografia laríngea é usada principalmente para:",[
 ["Diagnosticar paralisias vocais","Correta. Avalia atividade elétrica dos músculos."],
 ["Detectar refluxo ácido","Isso é pH-metria."],
 ["Estadiar câncer de laringe","Usa-se histologia e imagem."],
 ["Ver a onda mucosa","Isso é estroboscopia."],
 ["Medir frequência da voz","Isso é avaliação acústica."]
],"Paralisia? Mede a eletricidade do músculo (EMG).");

add("L042","Qual é a alteração congênita mais comum da laringe?",[
 ["Laringomalácia","Correta. Principal causa de estridor congênito."],
 ["Hemangioma subglótico","Menos comum."],
 ["Fenda laríngea","Rara e grave."],
 ["Membrana laríngea","Menos comum."],
 ["Estenose subglótica","Menos comum."]
],"Estridor no recém-nascido: laringomalácia até prova em contrário.");

add("L043","Qual é a causa da laringomalácia?",[
 ["Atraso no desenvolvimento neuromotor","Correta. Não é doença estrutural; a laringe colaba na inspiração."],
 ["Falha na recanalização laríngea","Causa estenose subglótica congênita."],
 ["Defeito de fusão das cartilagens","Causa fenda laríngea."],
 ["Tumor vascular benigno","É o hemangioma."],
 ["Infecção por parainfluenza","Causa crupe."]
],"Laringe molinha, que firma com o tempo.");

add("L044","Sobre a evolução da laringomalácia, é correto:",[
 ["Costuma resolver no primeiro ano de vida","Correta. Surge ao nascer ou no 1º mês."],
 ["Exige cirurgia na maioria dos casos","Cirurgia só na minoria grave."],
 ["Piora progressivamente até a adolescência","Melhora com o crescimento."],
 ["Surge só após os 2 anos","Surge no nascimento ou 1º mês."],
 ["É causa de estridor expiratório","O colapso é inspiratório."]
],"Laringomalácia: aparece cedo, some até 1 ano.");

add("L045","Laringomalácia leve a moderada é tratada com:",[
 ["Orientações posturais","Correta. Amamentar e dormir mais elevado."],
 ["Ressecção da aritenoide","Reservada a casos graves."],
 ["Propranolol","Usado no hemangioma."],
 ["Traqueostomia","Não é conduta habitual."],
 ["Adrenalina inalatória","Usada no crupe."]
],"Leve: cabeceira alta. Grave: laser na prega ariepiglótica.");

add("L046","Na laringoscopia flexível, a laringomalácia mostra:",[
 ["Colapso supraglótico na inspiração","Correta."],
 ["Edema subglótico em ponta de lápis","Típico do crupe."],
 ["Epiglote edemaciada (polegar)","Típico de supraglotite."],
 ["Membrana entre as pregas","Típico de membrana laríngea."],
 ["Lesões verrucosas exofíticas","Típico de papilomatose."]
],"Malácia = colapso de cima (supraglote) ao inspirar.");

add("L047","Lactente com estridor progressivo nos primeiros meses, tumor vascular abaixo das pregas. Tratamento de escolha:",[
 ["Betabloqueador (propranolol)","Correta. Cirurgia a laser nos casos graves."],
 ["Orientação postural apenas","Isso é para laringomalácia."],
 ["Antibiótico IV","Não é infeccioso."],
 ["Fonoterapia","Não se aplica."],
 ["Adrenalina inalatória","Usada no crupe."]
],"Hemangioma = propranolol.");

add("L048","Recém-nascido com dificuldade respiratória grave e aspiração frequente de líquidos sugere:",[
 ["Fenda laríngea","Correta. Defeito de fusão; trata-se com cirurgia reconstrutiva."],
 ["Laringomalácia leve","Causa estridor aos esforços, sem aspiração grave."],
 ["Cisto laríngeo","Causa estridor leve e rouquidão."],
 ["Nódulo vocal","Não é congênito."],
 ["Membrana fina","Causa poucos sintomas."]
],"Fenda = buraco entre laringe e esôfago = aspira.");

add("L049","Qual é causa ADQUIRIDA de estenose subglótica?",[
 ["Intubação orotraqueal prolongada","Correta. A congênita vem de falha de recanalização."],
 ["Uso excessivo e abusivo da voz","Causa lesões fonotraumáticas."],
 ["Tabagismo crônico e intenso","Ligado a Reinke e CEC."],
 ["Infecção por HPV na gestação","Causa papilomatose."],
 ["Refluxo ácido leve e ocasional","Não é a causa citada."]
],"Tubo por muito tempo cicatriza e estreita a subglote.");

add("L050","Membrana laríngea espessa entre as pregas causa:",[
 ["Voz fraca ou ausente e dificuldade respiratória","Correta. Tratamento cirúrgico."],
 ["Estridor aos esforços que some no 1º ano","Isso é laringomalácia."],
 ["Diplofonia por pólipo pediculado unilateral","Não é o caso."],
 ["Tosse de cachorro com febre após resfriado","Isso é crupe."],
 ["Pigarro crônico e laringite posterior","Isso é refluxo."]
],"Membrana gruda as cordas: sem voz e sem ar.");

add("L051","Qual é a lesão fonotraumática mais comum?",[
 ["Nódulo vocal","Correta. Ligado ao uso excessivo da voz."],
 ["Pólipo vocal","Menos comum, por trauma intenso."],
 ["Edema de Reinke","Ligado a tabagismo e hipotireoidismo."],
 ["Sulco vocal","É alteração estrutural mínima."],
 ["Papiloma","É causado por HPV."]
],"Calo de quem grita: nódulo.");

add("L052","Por que mulheres e crianças têm mais nódulos vocais?",[
 ["A laringe menor dissipa menos o trauma","Correta. Quanto mais longa a laringe, mais se dissipa."],
 ["Porque fumam mais","Não é a explicação."],
 ["Por hipotireoidismo frequente","Ligado ao Reinke."],
 ["Pela infecção por HPV","Ligada à papilomatose."],
 ["Por refluxo mais intenso","Não é a explicação."]
],"Laringe pequena = mesmo atrito em menos espaço.");

add("L053","O nódulo vocal localiza-se tipicamente:",[
 ["Na junção dos 2/3 anteriores da prega","Correta. Ponto de maior movimento na fala."],
 ["Na comissura posterior da glote","Típico da laringite por refluxo e granulomas."],
 ["Na região subglótica, abaixo da prega","Não é o local."],
 ["Na borda livre da epiglote","Não é o local."],
 ["Na prega vestibular (falsa corda)","Não é o local."]
],"Nódulo: entre o terço anterior e médio, bilateral (beijo).");

add("L054","Sobre o quadro do nódulo vocal, é correto:",[
 ["Rouquidão piora no dia e melhora com repouso","Correta. Com o tempo, a alteração fica constante."],
 ["Rouquidão constante desde o início","É progressiva, melhora com repouso no início."],
 ["Diplofonia unilateral súbita","Típico do pólipo."],
 ["Voz grave com dispneia","Típico do Reinke."],
 ["Estridor inspiratório em lactente","Típico de congênitas."]
],"Nódulo: acorda bem, termina o dia rouco.");

add("L055","Qual o tratamento inicial do nódulo vocal?",[
 ["Fonoterapia","Correta. Cirurgia em casos avançados ou refratários."],
 ["Exérese cirúrgica imediata","Não é a primeira linha."],
 ["Propranolol","Usado no hemangioma."],
 ["Inibidor de bomba de prótons","Usado no refluxo."],
 ["Radioterapia","Usada em câncer."]
],"Nódulo nasce do mau uso: reeduca a voz (fono).");

add("L056","Sambista com rouquidão persistente após grito intenso, lesão unilateral pediculada e diplofonia. Diagnóstico:",[
 ["Pólipo de prega vocal","Correta. Ruptura vascular em laringe inflamada."],
 ["Nódulo vocal","Costuma ser bilateral e melhorar com repouso."],
 ["Edema de Reinke","Ligado a tabaco e hipotireoidismo."],
 ["Cisto epidermoide","É congênito."],
 ["Laringite catarral","Quadro infeccioso agudo."]
],"Pólipo: grito único forte + vaso que estoura + um lado só.");

add("L057","Pólipo vocal de aspecto vermelho e angiomatoso indica:",[
 ["Lesão mais recente","Correta. O fibrótico esbranquiçado é mais antigo."],
 ["Lesão antiga e fibrosada","Essa seria esbranquiçada."],
 ["Malignidade certa","Não indica malignidade."],
 ["Infecção por HPV","Não é sinal de HPV."],
 ["Laringite tuberculosa","Não é o caso."]
],"Vermelho = novo. Branco = velho.");

add("L058","Qual é o tratamento na maioria dos pólipos vocais?",[
 ["Cirurgia","Correta. Prevenção pelo trabalho da voz."],
 ["Somente repouso vocal","O pólipo não melhora com repouso."],
 ["Antibiótico oral","Não é infeccioso."],
 ["Corticoide inalatório","Não é a conduta."],
 ["Propranolol oral","Usado em hemangioma."]
],"Nódulo = fono primeiro. Pólipo = cirurgia na maioria.");

add("L059","Edema de Reinke associa-se principalmente a:",[
 ["Tabagismo e hipotireoidismo","Correta. Cigarro aumenta VEGF e vascularização."],
 ["Crianças que gritam","Ligado a nódulo."],
 ["HPV perinatal","Ligado a papilomatose."],
 ["Intubação prolongada","Ligado à estenose subglótica."],
 ["Parainfluenza","Ligado ao crupe."]
],"Reinke: fumante (e hipotireóidea) com voz grossa.");

add("L060","Na progressão do edema de Reinke na mulher, é típico:",[
 ["Voz mais grave e perda da diferenciação sexual","Correta. Graus avançados trazem dispneia."],
 ["Voz progressivamente mais aguda","A voz fica mais grave."],
 ["Diplofonia súbita após grito","Típico do pólipo."],
 ["Melhora espontânea mantendo o cigarro","Exige cessar o tabaco."],
 ["Estridor congênito","Não se aplica."]
],"Reinke engrossa a voz até faltar o ar.");

add("L061","Edema de Reinke com cansaço vocal e dispneia corresponde ao grau:",[
 ["II (moderado)","Correta. Grau III tem rouquidão e dispneia intensas."],
 ["I (leve)","Grau I tem só sintomas vocais."],
 ["III (grave)","No III a dispneia é intensa."],
 ["IV","Não existe grau IV na classificação citada."],
 ["0","Não existe grau 0 citado."]
],"I voz, II voz + cansaço + dispneia, III tudo intenso.");

add("L062","Qual medida NÃO faz parte do tratamento do edema de Reinke?",[
 ["Propranolol","Correta. Propranolol é para hemangioma subglótico."],
 ["Cessar o tabagismo","Faz parte."],
 ["Fonoterapia","Faz parte."],
 ["Corticoide","Faz parte, para reduzir o edema."],
 ["Cirurgia com debridador","Faz parte nos casos graves."]
],"Reinke: parar de fumar, fono, corticoide, cirurgia.");

add("L063","Qual é definição de alterações estruturais mínimas?",[
 ["Pequenas anomalias que afetam voz, não respiração","Correta. Congênitas ou adquiridas."],
 ["Tumores malignos iniciais da prega vocal","Não é a definição."],
 ["Lesões infecciosas causadas pelo HPV","Isso é papilomatose."],
 ["Colapso inspiratório da supraglote no lactente","Isso é laringomalácia."],
 ["Lesões causadas apenas pelo tabagismo crônico","Não é a definição."]
],"Estrutural mínima: pouca anatomia, muita voz.");

add("L064","Pregas vocais de tamanhos diferentes causando diplofonia caracterizam:",[
 ["Assimetria laríngea","Correta. Trata-se com fono; cirurgia nos graves."],
 ["Sulco vocal","Estria longitudinal na prega."],
 ["Microdiafragma","Sinéquia entre as pregas."],
 ["Vasculodisgenesia","Vasos anômalos."],
 ["Ponte de mucosa","Ponte de epitélio que vibra separada."]
],"Dois tamanhos = dois tons (diplofonia).");

add("L065","No sulco vocal, a voz áspera e soprosa ocorre porque:",[
 ["A mucosa fica presa próxima ao músculo","Correta. A estria impede a vibração da mucosa."],
 ["Há edema por tabagismo","Isso é Reinke."],
 ["Há vasos que rompem e sangram","Isso é vasculodisgenesia."],
 ["Há cisto inflamado","Isso é cisto."],
 ["Há colapso da supraglote","Isso é laringomalácia."]
],"Sulco cola a mucosa: ela não ondula.");

add("L066","Qual é opção cirúrgica citada para o sulco vocal?",[
 ["Preenchimento com gordura ou ácido hialurônico","Correta. Também colágeno; novas terapias com plasma e células-tronco."],
 ["Laringectomia total com traqueostomia","Exagerado."],
 ["Cauterização a laser dos vasos anômalos","Usado na vasculodisgenesia."],
 ["Ressecção da aritenoide e prega ariepiglótica","Usado na laringomalácia grave."],
 ["Traqueostomia definitiva e repouso vocal","Não se aplica."]
],"Sulco é falta: preenche.");

add("L067","Qual a diferença entre cisto epidermoide e cisto glandular?",[
 ["Epidermoide é congênito; glandular é adquirido","Correta. O glandular decorre do uso excessivo da voz."],
 ["Epidermoide é maligno","Ambos são benignos."],
 ["Glandular é causado por HPV","Não é causado por HPV."],
 ["Epidermoide é tratado com antibiótico","Tratamento é fono e cirurgia."],
 ["Glandular é congênito","É adquirido."]
],"Epidermoide = de berço. Glandular = ganho no uso.");

add("L068","Pequena sinéquia congênita entre as pregas vocais, mais comum no sexo masculino, é:",[
 ["Microdiafragma","Correta. Impede a vibração correta."],
 ["Ponte de mucosa","É falha de mucosa que vibra separada."],
 ["Membrana laríngea","Congênita, mas maior, com dispneia."],
 ["Sulco vocal","É estria longitudinal."],
 ["Pólipo séssil","É lesão de massa adquirida."]
],"Micro-diafragma = mini membrana grudando as cordas.");

add("L069","A vasculodisgenesia é tratada com:",[
 ["Cauterização a laser","Correta. Principalmente em cantores."],
 ["Fonoterapia isolada","Não resolve os vasos."],
 ["Propranolol","Usado no hemangioma."],
 ["Preenchimento com gordura","Usado no sulco."],
 ["Antibióticos","Não é infeccioso."]
],"Vaso torto que sangra: laser.");

add("L070","A ponte de mucosa pode ter como consequência:",[
 ["Lesões secundárias, como pólipos","Correta. Vibra separada e machuca as duas pregas."],
 ["Estridor congênito grave","Não é o quadro."],
 ["Transformação maligna rápida","Não é descrito."],
 ["Paralisia do recorrente","Não tem relação."],
 ["Hemangioma subglótico","Não tem relação."]
],"Ponte bate e machuca: gera pólipo.");

add("L071","A papilomatose laríngea é causada por:",[
 ["HPV","Correta. Prefere áreas de transição epitelial."],
 ["EBV","Causa mononucleose e leucoplasia pilosa."],
 ["Herpes simples","Não causa papilomatose."],
 ["Parainfluenza","Causa crupe."],
 ["Candida","Causa candidíase."]
],"Papiloma = HPV (como verruga e colo do útero).");

add("L072","Na criança, a papilomatose laríngea pode ser adquirida por:",[
 ["Canal de parto com lesões vaginais ativas","Correta. Também deglutição de líquido amniótico contaminado."],
 ["Gritos frequentes e abuso vocal precoce","Ligado a nódulos."],
 ["Intubação neonatal prolongada em UTI","Ligado a estenose subglótica."],
 ["Amamentação com leite materno exclusivo","Não é a via citada."],
 ["Vacina contra HPV aplicada na mãe","A vacina previne."]
],"HPV passa da mãe no parto.");

add("L073","Qual é o tratamento da papilomatose laríngea?",[
 ["Sempre cirúrgico, com alta recidiva","Correta. Remove tecido lesado e sadio, gerando sequelas."],
 ["Fonoterapia isolada","Não remove as lesões."],
 ["Antibiótico prolongado","Não é bacteriana."],
 ["Observação até a puberdade","Não é a conduta citada."],
 ["Propranolol oral","Usado no hemangioma."]
],"Papilomatose: SEMPRE cirurgia, e volta.");

add("L074","Segundo o material, a vacinação contra HPV é indicada para:",[
 ["Homens e mulheres até 45 anos","Correta. Homens transmitem mesmo assintomáticos."],
 ["Só mulheres até 26 anos","O material inclui homens até 45."],
 ["Só crianças menores de 5 anos","Não é o citado."],
 ["Só pacientes com lesão ativa","É preventiva."],
 ["Só homens acima de 50 anos","Não é o citado."]
],"HPV: vacina para os dois sexos, até 45.");

add("L075","Criança com rouquidão por mais de 15 dias deve ser investigada. Qual é a lesão mais comum nessa faixa?",[
 ["Nódulo vocal","Correta. Mas a papilomatose precisa ser descartada."],
 ["Papilomatose laríngea","Importante, mas não a mais comum."],
 ["Carcinoma espinocelular","Raro em criança."],
 ["Edema de Reinke","Ligado a tabaco em adultos."],
 ["Laringomalácia","Causa estridor, não rouquidão crônica."]
],"Criança rouca: nódulo é o mais comum, papiloma é o perigoso.");

add("L076","A laringite catarral aguda caracteriza-se por:",[
 ["Rouquidão após resfriado, bom estado geral","Correta. Mais comum, viral em 75%, glote e supraglote."],
 ["Estridor com sinal da ponta de lápis","Típico do crupe."],
 ["Sinal do polegar e salivação","Típico da supraglotite."],
 ["Laringite posterior com pigarro","Típico do refluxo."],
 ["Lesão granulomatosa exofítica","Típico das crônicas específicas."]
],"Catarral = gripe que desceu: rouco, mas bem.");

add("L077","Na laringite catarral aguda, secreção nas pregas vocais sugere:",[
 ["Infecção bacteriana secundária","Correta. A viral geralmente é sem exsudato."],
 ["Etiologia viral pura","Viral costuma ser sem exsudato."],
 ["Refluxo faringolaríngeo","Não é a interpretação."],
 ["Papilomatose","Não é a interpretação."],
 ["Câncer de laringe","Não é a interpretação."]
],"Secreção na corda = bactéria chegou depois.");

add("L078","No crupe viral (laringotraqueíte), a principal etiologia é:",[
 ["Parainfluenza tipos 1, 2 e 3","Correta. Também influenza A, VSR, adeno e rinovírus."],
 ["H. influenzae tipo B","Causa supraglotite em crianças."],
 ["S. aureus","Causa supraglotite em adultos."],
 ["Streptococcus pyogenes","Causa faringite."],
 ["Mycobacterium tuberculosis","Causa laringite crônica."]
],"Crupe = paraINFLUENZA. Epiglotite = HAEMOPHILUS.");

add("L079","Criança de 2 anos com tosse de cachorro, estridor inspiratório e febre baixa após resfriado. O RX mostraria:",[
 ["Sinal da ponta de lápis (torre de igreja)","Correta. Afunilamento subglótico do crupe."],
 ["Sinal do polegar na epiglote","Típico da supraglotite."],
 ["Halo hipercaptante em espaço cervical","Típico de abscesso na TC."],
 ["Pulmão com cavitação no ápice direito","Sugere tuberculose pulmonar."],
 ["Laringe e traqueia sem nenhuma alteração","No crupe há afunilamento subglótico."]
],"Crupe = subglote apertada = ponta de lápis.");

add("L080","Qual é a medida mais eficaz para reduzir rapidamente o edema no crupe?",[
 ["Adrenalina inalatória","Correta. 3 a 5 ml da solução milesimal diluída em SF."],
 ["Antibiótico venoso","Crupe é viral."],
 ["Antitérmico isolado","Não reduz edema."],
 ["Fonoterapia","Não se aplica."],
 ["Inibidor de bomba de prótons","Não se aplica."]
],"Crupe: dexametasona para segurar, adrenalina inalatória para desinchar rápido.");

add("L081","Qual dose de dexametasona é citada para crupe e supraglotite?",[
 ["0,15 a 0,6 mg/kg IM ou VO","Correta."],
 ["1 a 2 mg/kg IV de 6/6h","É dose de prednisona na PFAPA."],
 ["10 mg/kg VO em dose única","Dose excessiva."],
 ["0,01 mg/kg IV a cada hora","Dose insuficiente."],
 ["5 mg/kg IM em dose única","Não é a dose citada."]
],"Dexa: 0,15 a 0,6 mg/kg.");

add("L082","Na supraglotite aguda, o principal agente em crianças é:",[
 ["H. influenzae tipo B","Correta. Em adultos, S. aureus."],
 ["Parainfluenza","Causa crupe."],
 ["Adenovírus","Causa faringite viral."],
 ["Coxsackie A","Causa herpangina."],
 ["Corynebacterium diphtheriae","Causa difteria."]
],"Epiglotite: Hib na criança, S. aureus no adulto.");

add("L083","Criança com febre alta, salivação, disfagia, dispneia que piora ao deitar e estridor. O RX mostra:",[
 ["Sinal do polegar","Correta. Epiglote edemaciada da supraglotite."],
 ["Sinal da ponta de lápis","Típico do crupe."],
 ["Laringite posterior","Achado endoscópico do refluxo."],
 ["Colapso supraglótico inspiratório","Achado da laringomalácia."],
 ["Halo hipercaptante cervical","Achado de abscesso na TC."]
],"Polegar = epiglote inchada. Paciente baba e senta para respirar.");

add("L084","Qual é a conduta na supraglotite aguda?",[
 ["Internação, ATB IV, corticoide e via aérea","Correta. IOT ou traqueostomia se obstrução severa."],
 ["Tratamento ambulatorial com amoxicilina","É grave e exige hospitalização."],
 ["Adrenalina inalatória e alta","Conduta de crupe leve, insuficiente aqui."],
 ["Fonoterapia e IBP","Não se aplica."],
 ["Observação domiciliar","Risco de obstrução completa."]
],"Epiglotite: internar, antibiótico na veia, via aérea preparada.");

add("L085","Comparada ao crupe, a supraglotite tem:",[
 ["Maior risco de obstrução e mais intubação","Correta. Pode exigir traqueostomia se o tubo não passa."],
 ["Etiologia predominantemente viral","É bacteriana."],
 ["Localização subglótica","É supraglótica."],
 ["Curso sempre leve","É forma grave."],
 ["Tratamento sem antibiótico","Exige ATB IV."]
],"Crupe assusta; epiglotite mata.");

add("L086","Na supraglotite, qual antibiótico IV é citado?",[
 ["Ceftriaxona","Correta. Também cefuroxima e ampicilina com cloranfenicol."],
 ["Metronidazol isolado","Não é citado."],
 ["Azitromicina oral","Não é citada; é grave e exige IV."],
 ["Penicilina benzatina","Não é citada."],
 ["Nistatina","É antifúngico."]
],"Epiglotite: ceftriaxona ou cefuroxima.");

add("L087","Laringite crônica granulomatosa com perda de peso, febre vespertina e tosse sugere:",[
 ["Tuberculose laríngea","Correta. Geralmente secundária, hematogênica."],
 ["Laringite por refluxo","Não cursa com febre e emagrecimento."],
 ["Nódulo vocal","Lesão fonotraumática."],
 ["Crupe viral","Quadro agudo em criança."],
 ["Laringomalácia","Congênita."]
],"Laringe granulomatosa + sintomas de TB = TB laríngea.");

add("L088","Na laringite crônica específica, os agentes mais comuns de cada grupo são:",[
 ["M. tuberculosis, P. brasiliensis e L. braziliensis","Correta. Bactéria, fungo e parasita mais comuns."],
 ["H. influenzae, Candida e Trichinella","Não são os mais comuns de cada grupo."],
 ["T. pallidum, Histoplasma e Schistosoma","São raros ou menos comuns."],
 ["M. leprae, Candida e Syngamus","Não são os mais comuns."],
 ["S. aureus, Aspergillus e Toxoplasma","Não são citados."]
],"Crônica específica: TB, Paracoco, Leish.");

add("L089","Por que o diagnóstico da leishmaniose laríngea precisa ser certo antes de tratar?",[
 ["Tratamento longo com muitos efeitos colaterais","Correta. Por isso se confirma por biópsia/PCR."],
 ["Porque não há tratamento disponível","Há tratamento."],
 ["Porque é sempre autolimitada","Não é autolimitada."],
 ["Porque o tratamento é cirúrgico","É clínico."],
 ["Porque é doença de notificação","Não é a razão citada."]
],"Leish: remédio pesado, então confirme antes.");

add("L090","A sarcoidose laríngea é uma laringite crônica:",[
 ["Específica não infecciosa, granulomatosa","Correta. Doença inflamatória sistêmica."],
 ["Específica infecciosa bacteriana","Não é infecciosa."],
 ["Inespecífica por refluxo ácido","Não é refluxo."],
 ["Aguda viral, de curso autolimitado","É crônica."],
 ["Congênita, presente desde o nascimento","Não é congênita."]
],"Granuloma sem bicho = sarcoidose.");

add("L091","Hiperemia e edema na parte POSTERIOR da laringe com pigarro e tosse crônica sugerem:",[
 ["Laringite por refluxo faringolaríngeo","Correta. Área em contato com o conteúdo refluído."],
 ["Laringite tuberculosa secundária","Costuma acometer toda a laringe."],
 ["Nódulo vocal bilateral do adulto","Fica nos 2/3 anteriores."],
 ["Supraglotite aguda bacteriana","Quadro agudo e grave."],
 ["Papilomatose laríngea por HPV","Lesões exofíticas verrucosas."]
],"Atrás inflamado = refluxo (laringite posterior).");

add("L092","Sobre o refluxo laringofaríngeo, é correto:",[
 ["Metade dos pacientes com DRGE não tem queixa gástrica","Correta. Manifesta-se de forma atípica, como na laringe."],
 ["Exige sempre azia ou queimação para o diagnóstico","50% não têm queixas gástricas."],
 ["Acomete toda a laringe de modo igual e difuso","Acomete sobretudo a região posterior."],
 ["É causado por agente infeccioso de transmissão oral","É irritação química."],
 ["Não causa granuloma nem outras complicações","Granuloma é sua complicação mais grave."]
],"Refluxo laríngeo é silencioso no estômago.");

add("L093","Qual exame identifica TODOS os tipos de refluxo, ácido e não ácido?",[
 ["Impedanciometria esofágica","Correta. A pH-metria detecta só o ácido."],
 ["pH-metria","Detecta só refluxo ácido."],
 ["Endoscopia esofágica","Mostra sinais sugestivos, não todos os tipos."],
 ["Estroboscopia","Avalia vibração vocal."],
 ["Eletromiografia laríngea","Avalia músculos."]
],"Impedância vê tudo; pH só vê ácido.");

add("L094","Qual é o tratamento da laringite por refluxo?",[
 ["IBP e medidas higieno-dietéticas","Correta. Evitar café, álcool, gordura; elevar cabeceira."],
 ["Antibiótico oral por 10 dias","Não é infeccioso."],
 ["Adrenalina inalatória diária","Usada no crupe."],
 ["Cirurgia imediata antirrefluxo","Não é primeira linha."],
 ["Propranolol em dose baixa","Usado no hemangioma."]
],"Refluxo: IBP + cabeceira alta + não comer antes de deitar.");

add("L095","Granuloma laríngeo decorre de ulceração da mucosa e pode ser causado por:",[
 ["Refluxo ou intubação","Correta. É a situação mais grave do refluxo."],
 ["HPV perinatal","Causa papiloma."],
 ["Hib","Causa supraglotite."],
 ["Grito único intenso","Causa pólipo."],
 ["Hipotireoidismo","Ligado ao Reinke."]
],"Granuloma: refluxo ou tubo.");

add("L096","Qual é o principal fator de risco da leucoplasia laríngea?",[
 ["Tabagismo","Correta. Também idade, abuso vocal e álcool."],
 ["Parainfluenza","Causa crupe."],
 ["Hipotireoidismo","Ligado a Reinke."],
 ["Prematuridade","Não é citado."],
 ["Uso de corticoide inalatório","Não é citado."]
],"Leucoplasia laríngea = cigarro.");

add("L097","Na leucoplasia laríngea, a primeira alteração do epitélio é:",[
 ["Metaplasia, com perda da translucidez","Correta. A mucosa espessa e fica branca."],
 ["Carcinoma in situ, sem invasão","É etapa tardia."],
 ["Displasia severa com atipias","Vem depois da metaplasia."],
 ["Carcinoma invasor da membrana","É a etapa final."],
 ["Eritroplasia com áreas vermelhas","Indica maior risco, não é a primeira etapa."]
],"Primeiro passo: metaplasia (branqueia).");

add("L098","Qual classificação histopatológica da leucoplasia laríngea é a mais usada?",[
 ["OMS (WHO)","Correta. Hiperplasia, displasias leve, moderada e severa, carcinoma in situ."],
 ["Jones","É da febre reumática."],
 ["Paradise","É indicação de tonsilectomia."],
 ["Centor","É escore de faringite."],
 ["Breslow","É usada para melanoma."]
],"Leucoplasia: OMS.");

add("L099","Paciente com disfonia há mais de 15 dias deve:",[
 ["Ter a laringe examinada","Correta. Sobretudo idosos, tabagistas e homens."],
 ["Aguardar 6 meses","Atrasa diagnóstico de câncer."],
 ["Receber antibiótico empírico","Não substitui o exame."],
 ["Fazer só fonoterapia","Precisa examinar antes."],
 ["Usar IBP sem exame","Precisa examinar antes."]
],"Rouco há mais de 15 dias? Olhe a laringe.");

add("L100","Qual é o principal tipo de câncer da laringe?",[
 ["Carcinoma espinocelular","Correta. Surge de displasia grave ou leucoplasia maligna."],
 ["Adenocarcinoma glandular","Bem menos comum."],
 ["Linfoma não Hodgkin","Bem menos comum."],
 ["Condrossarcoma","Raro."],
 ["Melanoma de mucosa","Raro."]
],"Laringe e boca: CEC.");

add("L101","Sobre o diagnóstico do CEC de laringe, é correto:",[
 ["Só a histologia dá diagnóstico definitivo","Correta. Não há aspecto visual que confirme ou descarte."],
 ["O aspecto exofítico confirma câncer","Nenhum aspecto visual é definitivo."],
 ["Lesão ulcerada exclui câncer","Ulceração pode ser câncer."],
 ["A TC dispensa biópsia","A biópsia é necessária."],
 ["Estroboscopia confirma malignidade","Não confirma."]
],"Câncer só se confirma no microscópio.");

add("L102","Tumor inicial de laringe pode ser tratado com:",[
 ["Radioterapia exclusiva ou cordectomia parcial","Correta. Avançados exigem laringectomia total."],
 ["Laringectomia total com esvaziamento","É para tumores avançados."],
 ["Fonoterapia isolada e prolongada","Não trata o tumor."],
 ["Antibiótico prolongado e corticoide","Não se aplica."],
 ["Observação clínica com laringoscopia","Inadequado."]
],"Inicial: RT ou cordectomia. Avançado: laringectomia total.");

add("L103","Após laringectomia total, o paciente:",[
 ["Passa a respirar por traqueostomia","Correta. A laringe é retirada e substituída por prótese."],
 ["Mantém a respiração pela boca","A via é desconectada."],
 ["Mantém as pregas vocais","Toda a laringe é retirada."],
 ["Não precisa de reabilitação vocal","Precisa de reabilitação."],
 ["Volta a ter laringe normal","Não há regeneração."]
],"Laringectomia total = traqueostoma definitivo.");

add("L104","Qual é a via cirúrgica mais utilizada no câncer de laringe?",[
 ["Microcirurgia endolaríngea","Correta. A via aberta é a laringectomia."],
 ["Cervicotomia lateral","Não é a mais utilizada."],
 ["Via transnasal","Não é citada."],
 ["Toracotomia","Não se aplica."],
 ["Via transoral para abscesso","Não se aplica."]
],"Mais usada: por dentro (endolaríngea).");

})();
