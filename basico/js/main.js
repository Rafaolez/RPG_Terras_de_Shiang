//variáveis de controle do framework
var story;
var cont = 0;
var instrucoes = false;
var creditos = false;
var master = false;

//variável de controle do item
var item = false;

//função que retorna dados das escolhas
function getStory() {
	return {

		currentScene: "vingançaDeAyla",
		vingançaDeAyla: {
			title: "VINGANÇA DE AYLA",
			image: "img/Imagem_Cabeca_teste.png",
			story: "<h3> Desde criança, ela havia lutado para despertar a magia que deveria correr em suas veias, o mesmo poder que fazia de sua família uma das linhagens mais respeitadas no mundo arcano. Mas enquanto seu irmão mais velho dominava feitiços com facilidade, ela mal conseguia acender uma vela sem esforço extremo. Ayla seria banida. Não havia espaço para fraquezas no legado de sua família. Eles a enviaram embora com apenas um manto surrado e uma sacola de provisões básicas, como se quisessem apagar sua existência. </h3> <h3>Abaixo estão as duas escolhas possíveis:</h3>",
			choices: [
				{
					choice: "FICAR NA VILA",
					destination: 'FicarNaVila'
				},
				{
					choice: "SAIR DA VILA",
					destination: 'SairDaVila'
				}
			]
		},

		FicarNaVila: {
			title: "Ficar Na Vila",
			image: "img/imagem02.webp",
			story: "<p>Ayla decidiu ficar. Apesar da dor, apesar da rejeição que corroía seu peito como ferrugem, ela acreditava que ainda poderia encontrar um lugar entre os seus. Talvez, se provasse seu valor, sua família finalmente enxergasse algo além da decepção em seu nome.</p> <p>Mas os dias passaram, e a realidade se tornou mais cruel do que ela imaginava.</p> <p>Nas ruas da vila, olhares se desviavam sempre que ela passava. Murmúrios seguiam seus passos como um vento frio. Os aldeões a tratavam como se fosse invisível, ou pior… como se sua presença contaminasse o ar ao seu redor.</p> <p>No mercado, as atendentes serviam os outros antes dela, ignorando sua presença até que não restasse escolha. Se tentava se aproximar das conversas na praça, o burburinho diminuía até que restasse apenas um silêncio incômodo. Quando ela partia, os sussurros retornavam, mais afiados do que lâminas.</p> <p>Mas nada doía mais do que o que acontecia dentro de casa. O salão onde antes se reuniam para as refeições estava mais frio, mais vazio, mesmo quando todos estavam ali. </p> ",
			choices: [
				{
					choice: "TENTAR SE RECONCILIAR COM A FAMILIA",
					destination: 'fnrTentarseReconciliar'
				},
				{
					choice: "AYLA INDGNADA DECIDE IR EM BUSCA DE VINGANÇA",
					destination: 'aylaIndignada'
				}

			]
		},

		fnrTentarseReconciliar: {
			title: "Final Ruim",
			image: "img/imagem02.webp",
			story: "<p>Ayla não queria desistir. Por mais que a rejeição fosse dolorosa, uma parte dela ainda ansiava por pertencimento. Talvez houvesse uma chance de mudar as coisas, de ser vista não como um erro, mas como alguém que ainda poderia ser parte daquela família. </p> <p>Naquela noite, tomou coragem e se aproximou de sua mãe. Sua voz tremeu ao chamá-la, os olhos brilhando com uma esperança frágil.</p> <p>— Mãe… por favor, me escute. Eu sei que falhei com vocês, mas ainda sou sua filha. Não posso mudar o que sou, mas posso provar que mereço estar aqui.</p> <p>A mulher ergueu os olhos, seu rosto impassível. O silêncio entre as duas pareceu se arrastar por uma eternidade antes que ela finalmente respondesse.</p> <p>— Você nunca fez parte de nós, Ayla. Nunca foi digna do nosso sangue.</p> <p>Foi então que compreendeu: ela nunca seria aceita. Não importava o quanto tentasse, o quanto se esforçasse para ser vista. Sua família já havia decidido seu destino. E se ela quisesse mudá-lo, teria que fazer isso sozinha.</p> <p>Mas a pior parte ainda estava por vir.</p> <p>Os rumores começaram a se espalhar pela vila como um incêndio incontrolável. A ovelha negra da família mais poderosa da cidade estava tentando retornar. Para os aldeões, isso era um insulto. Como alguém tão indigna ousava buscar redenção? Como poderia querer se misturar entre aqueles que a desprezavam?</p> <p>O medo virou raiva. A raiva se transformou em ódio.</p> <p>E o ódio se tornou uma sentença.</p> <p>Na noite seguinte, Ayla foi arrancada de sua cama por mãos impiedosas. Seu grito se perdeu no ar enquanto era arrastada pelas ruas escuras, seus pés descalços raspando contra a terra fria. O cheiro de óleo e madeira queimada invadiu seu nariz antes mesmo de ver o que a aguardava.</p> <p>Na praça central, uma fogueira já estava acesa</p> <p>Seus pulsos foram amarrados, seu corpo preso ao poste de madeira. O calor da fogueira subiu por suas pernas, o cheiro de fumaça se tornando sufocante.</p> <p>— Que a vergonha seja purificada pelo fogo! — gritou alguém da multidão.</p> <p>…</p> ",
			choices: [
				{
					choice: "Introdução",
					destination: "instrucoes"
				}
			]
		},

		SairDaVila: {
			title: "SAIR DA VILAo",
			image: "img/imagem02.webp",
			story: "<p>Atravessando as ruas estreitas da nova vila. As casas de pedra e madeira se alinhavam ao redor de uma pequena praça, onde feirantes vendiam ervas secas, tecidos e joias simples. Mas algo mais chamou sua atenção.</p> <p>Num canto da praça, um pequeno teatro de rua estava montado. Um palco improvisado, feito de tábuas gastas, servia de base para uma senhora de cabelos longos e prateados. Seu manto escuro esvoaçava ao vento enquanto ela falava, sua voz rouca tentando prender a atenção da plateia dispersa. Poucas pessoas se detinham para ouvir a história, mais interessadas em suas compras e conversas do dia.</p> <p>Curiosa, Ayla se aproximou, observando os gestos teatrais da mulher. Ela contava uma lenda — mas não era uma lenda qualquer.</p> <p>“Há muito tempo, um único instrumento foi responsável pelo poder de uma linhagem inteira. A Viela de Roda, forjada em magia e mistério, escolhia seus herdeiros e concedia a eles dons extraordinários. Mas o poder sempre tem um preço… um preço que poucos estão dispostos a pagar.”</p> <p>Ayla sentiu o coração acelerar. Seu corpo ficou tenso, e uma leve vertigem tomou conta dela. Aquilo não era apenas uma história para entreter aldeões desavisados. Ela sabia exatamente de qual linhagem aquela mulher falava.</p> <p>“Dizem que aquele que destruir a Viela libertará todas as almas presas ao seu legado. Mas cuidado…” — a velha fez uma pausa dramática, deixando o suspense pairar no ar antes de continuar — “…pois sem o Elixir da Vida, aquele que tocar na Viela pode perder tudo, até mesmo sua própria existência.”</p> <p>Os olhos de Ayla se arregalaram. O Elixir da Vida… Ela já ouvira esse termo antes. O elixir era a chave para sua sobrevivência e para o sucesso de sua missão.</p> <p>Ela observou atentamente a velha senhora, tentando absorver cada palavra. O destino a havia levado até ali, e ela não podia ignorar o chamado. Agora, Ayla não apenas sabia que precisava destruir a Viela de Roda, mas também entendia a importância de possuir o elixir antes que fosse tarde demais.</p>",
			choices: [
				{
					choice: "SABER SOBRE A LENDA",
					destination: 'saberSobreALenda'
				},
				{
					choice: "AYLA INDGNADA DECIDE IR EM BUSCA DE VINGANÇA",
					destination: 'aylaIndignada'
				}

			]
		},

		saberSobreALenda: {
			title: "Saber Sobre A Lenda",
			image: "img/imagem02.webp",
			story: "<p>Ayla segue por uma trilha estreita no meio de um bosque sombrio, onde os raios de sol mal conseguem atravessar as copas densas das árvores, em busca de respostas. Após dias de viagem, ela encontra uma cabana escondida, feita de madeira escura e coberta de musgo. É o lar de uma anciã conhecida como Morgana, uma poderosa feiticeira que, segundo rumores, possui conhecimentos arcanos raros e perigosos. Ayla sente que este encontro pode ser a chave para desbloquear seu verdadeiro potencial, e saber mais da sua história.</p> <p>Ayla bate na porta, que se abre com um rangido. Morgana aparece, uma figura curvada com olhos brilhantes e uma voz que parece ecoar com segredos antigos.</p> <p>-Vejo que busca poder, criança. Mas o poder tem um custo. Você está disposta a pagar?</p>",
			choices: [
				{
					choice: "AYLA ACEITA A OFERTA SEM HESITAR",
					destination: 'aylaAceitaOferta'
				},
				{
					choice: "AYLA EXIGE SABER O PREÇO EXATO ANTES",
					destination: 'alyaExigeSaber'
				}
			]
		},
		aylaIndignada: {
			title: "AYLA INDGNADA DECIDE IR EM BUSCA DE VINGANÇA",
			image: "img/imagem02.webp",
			story: "<p>Ayla segue por uma trilha estreita no meio de um bosque sombrio, onde os raios de sol mal conseguem atravessar as copas densas das árvores, em busca de respostas. Após dias de viagem, ela encontra uma cabana escondida, feita de madeira escura e coberta de musgo. É o lar de uma anciã conhecida como Morgana, uma poderosa feiticeira que, segundo rumores, possui conhecimentos arcanos raros e perigosos. Ayla sente que este encontro pode ser a chave para desbloquear seu verdadeiro potencial, e saber mais da sua história.</p> <p>Ayla bate na porta, que se abre com um rangido. Morgana aparece, uma figura curvada com olhos brilhantes e uma voz que parece ecoar com segredos antigos.</p> <p>-Vejo que busca poder, criança. Mas o poder tem um custo. Você está disposta a pagar?</p>",
			choices: [
				{
					choice: "AYLA ACEITA A OFERTA SEM HESITAR",
					destination: 'aylaAceitaOferta'
				},
				{
					choice: "AYLA EXIGE SABER O PREÇO EXATO ANTES",
					destination: 'alyaExigeSaber'
				}
			]
		},

		aylaAceitaOferta: {
			title: "Ayla aceita a oferta sem hesitar",
			image: "img/imagem01.webp",
			story: "<p>Morgana ensina Ayla a canalizar sua magia através da música, amplificando sua influência sobre os outros. No entanto, o fio de cabelo permite que Morgana monitore Ayla, mantendo um vínculo permanente entre as duas.</p>",
			choices: [
				{
					choice: "ir em busca do elixir e de como fazer",
					destination: "irEmBuscaDoElixir"
				}
			]
		},

		irEmBuscaDoElixir: {
			title: "ir em busca do elixir e de como fazer",
			image: "img/imagem01.webp",
			story: "<p>Ayla caminha sob a luz pálida da lua, o peso de sua busca refletido em seus olhos. O Elixir da Vida, uma substância mística que promete poder e longevidade, é o próximo passo em sua jornada, em ele ao destruir a viela de roda além de enfraquecer toda sua linhagem enfraqueceria a si mesmo.</p> <p>Ela encontrou o mago recluso em sua cabana esquecida no meio da floresta. As ervas pendiam do teto, exalando um cheiro agridoce, e velas tremulavam nas prateleiras de madeira, projetando sombras inquietas nas paredes. Ele era um homem de idade indefinida, envolto em mantos gastos pelo tempo, os olhos carregando o fardo de muitos segredos.</p> <p>— Você sabe por que estou aqui. — Ayla disse, sua voz cortando o silêncio.</p> <p>O mago suspirou, apoiando-se no cajado com um olhar grave.</p> <p>— Há perguntas que não devem ser feitas, criança. — Sua voz era um eco rouco na pequena cabana.</p> <p>— Não sou uma criança — Ayla retrucou, dando um passo à frente. — Quero saber sobre o Elixir da Vida.</p> <p>O homem permaneceu em silêncio por um longo tempo, seus dedos ossudos apertando o cajado como se procurasse força nas fibras da madeira. Seus olhos se estreitaram, analisando Ayla como quem avalia o peso de uma decisão perigosa.</p> <p>— Esqueça esse nome. Esqueça essa busca. Há coisas que não devem ser tocadas, e o Elixir está entre elas.</p> <p>Ayla franziu o cenho, sua paciência se esgotando.</p> <p>— Você sabe onde encontrá-lo, não sabe?</p> <p>O mago se virou, pegando um punhado de ervas secas e jogando-as ao fogo. A chama crepitou, e um aroma denso preencheu o ar.</p> <p>— O Elixir é uma maldição tanto quanto é um presente — ele murmurou, como se falasse mais para si mesmo do que para ela. — Aqueles que o buscam raramente vivem para contar sua história.</p> <p>Ayla sentiu seu coração acelerar. O mago sabia algo.</p> <p>— Então me deixe decidir. Onde ele está?</p> <p>O homem se virou para ela, e pela primeira vez, seus olhos refletiam um misto de pena e advertência.</p>",
			choices: [
				{
					choice: "confrontar o mago usando magia",
					destination: "confrontarMagoUsandoMagia"
				},
				{
					choice: "ROUBAR O LIVRO DO MAGO",
					destination: "roubarLivroMago"
				}
			]
		},

		confrontarMagoUsandoMagia: {
			title: "Final Ruim",
			image: "img/imagem02.webp",
			story: "Ayla sentiu a raiva fervilhar dentro de si. O mago se recusava a revelar o segredo do Elixir da Vida, ocultando informações que poderiam ser a chave para seu destino. Sua paciência se esgotara.</p> <p>— Se não me dirá por bem… — ela murmurou, erguendo a mão.</p> <p>Seus dedos se curvaram no ar, traçando símbolos arcanos enquanto sua magia pulsava como um trovão silencioso. O mago permaneceu imóvel, observando-a com olhos profundos e enigmáticos.</p> <p>— Você não sabe o que está fazendo, criança — disse ele calmamente.</p> <p>Mas Ayla ignorou o aviso. Com um gesto rápido, lançou um feitiço de controle, tentando dobrar a mente do mago à sua vontade. A energia se estendeu como fios invisíveis, enroscando-se ao redor dele. Por um breve momento, Ayla sentiu a magia funcionar—o ar ficou pesado, sua mente se expandiu, e o mundo pareceu pender ao seu favor.</p> <p>Então, tudo desmoronou.</p> <p>A magia revidou. Como uma serpente que se volta contra o encantador, a energia se retorceu e ricocheteou de volta para Ayla. O chão tremeu, uma luz esverdeada explodiu ao seu redor, e seu corpo foi tomado por uma sensação estranha e sufocante.</p> <p>Quando a fumaça dissipou, a cabana parecia muito maior do que antes. As mesas pareciam montanhas, as ervas pendiam do teto como árvores gigantescas. Algo estava errado.</p> <p>Ayla tentou falar, mas tudo o que saiu foi um 'croac'.</p> <p>Seus olhos arregalaram-se de horror. Tentou se levantar, mas suas pernas estavam encolhidas. Sua pele não era mais pele… era fria e escorregadia.</p> <p>Ela havia se transformado em um sapo.</p> <p>O mago suspirou, cruzando os braços enquanto olhava para a pequena criatura verde que coaxava desesperada no chão.</p> <p>— Eu avisei.</p> <p>Ele se abaixou, pegou Ayla com uma das mãos e colocou-a sobre a mesa.</p>",
			choices: [
				{
					choice: "Introdução",
					destination: "instrucoes"
				}
			]
		},

		alyaExigeSaber: {
			title: "Ayla exige saber o preço exato antes de concordar",
			image: "img/imagem01.webp",
			story: "<p>Morgana revela que deseja um pedaço da alma de Ayla, prometendo que o conhecimento oferecido valerá a pena. Ayla recusa o acordo, mas Morgana, impressionada com sua determinação, ensina um feitiço básico como prova de sua força.</p>",
			choices: [
				{
					choice: "aprimorar poderes",
					destination: "aprimorarPoderes"
				}
			]
		},

		aprimorarPoderes: {
			title: "APRIMORAR PODERES",
			image: "img/imagem01.webp",
			story: "<p>Após aprimorar seus poderes com Morgana, Ayla vai em busca do Elixir da Vida, uma substância mística que promete poder e longevidade, é o próximo passo em sua jornada, em ele ao destruir a viela de roda além de enfraquecer toda sua linhagem enfraqueceria a si mesmo.</p> <p>Ela encontrou o mago recluso em sua cabana esquecida no meio da floresta. As ervas pendiam do teto, exalando um cheiro agridoce, e velas tremulavam nas prateleiras de madeira, projetando sombras inquietas nas paredes. Ele era um homem de idade indefinida, envolto em mantos gastos pelo tempo, os olhos carregando o fardo de muitos segredos.</p> <p>— Você sabe por que estou aqui. — Ayla disse, sua voz cortando o silêncio.</p> <p>O mago suspirou, apoiando-se no cajado com um olhar grave.</p> <p>— Há perguntas que não devem ser feitas, criança. — Sua voz era um eco rouco na pequena cabana.</p> <p>— Não sou uma criança — Ayla retrucou, dando um passo à frente. — Quero saber sobre o Elixir da Vida.</p> <p>O homem permaneceu em silêncio por um longo tempo, seus dedos ossudos apertando o cajado como se procurasse força nas fibras da madeira. Seus olhos se estreitaram, analisando Ayla como quem avalia o peso de uma decisão perigosa.</p> <p>— Esqueça esse nome. Esqueça essa busca. Há coisas que não devem ser tocadas, e o Elixir está entre elas.</p> <p>Ayla franziu o cenho, sua paciência se esgotando.</p> <p>Ayla franziu o cenho, sua paciência se esgotando.</p> <p>O mago se virou, pegando um punhado de ervas secas e jogando-as ao fogo. A chama crepitou, e um aroma denso preencheu o ar.</p> <p>— O Elixir é uma maldição tanto quanto é um presente — ele murmurou, como se falasse mais para si mesmo do que para ela. — Aqueles que o buscam raramente vivem para contar sua história.</p> <p>Ayla sentiu seu coração acelerar. O mago sabia algo.</p> <p>— Então me deixe decidir. Onde ele está?</p> <p>O homem se virou para ela, e pela primeira vez, seus olhos refletiam um misto de pena e advertência.</p>",
			choices: [
				{
					choice: "ROUBAR O LIVRO DO MAGO",
					destination: "roubarLivroMago"
				},
				{
					choice: "CONFRONTAR O MAGO USANDO SEUS PODERES",
					destination: "confrontarMagoUsandoPoderes"
				}
			]
		},

		roubarLivroMago: {
			title: "ROUBAR O LIVRO DO MAGO",
			image: "img/imagem01.webp",
			story: "<p>Ayla cerrou os punhos. O mago se recusava a lhe dar qualquer informação sobre o Elixir da Vida, e cada palavra dele parecia um enigma indecifrável. Mas se ele não lhe diria por bem… ela encontraria outra forma.</p> <p>Assim que a noite caiu e o mago adormeceu em seu velho catre de palha, Ayla se moveu silenciosamente pela cabana. A única luz vinha das brasas moribundas na lareira, lançando sombras dançantes nas paredes de pedra. Seu olhar percorreu a sala até pousar em uma estante repleta de grimórios e pergaminhos antigos. E lá estava ele.</p> <p>Um livro grosso de capa de couro, cravejado com símbolos arcanos que brilhavam fracamente sob a luz fraca. A respiração de Ayla ficou presa na garganta. Aquilo tinha que ser o livro—o tomo onde o mago escondia seus segredos, talvez até mesmo o caminho para o Elixir.</p> <p>Com dedos ágeis, ela o puxou da prateleira e o abraçou contra o peito. O couro era frio e parecia vibrar sob suas mãos, como se o próprio conhecimento dentro dele tentasse escapar. Sem perder tempo, Ayla se afastou em direção à porta, ansiosa para desvendar seus mistérios.</p> <p>Mas, ao folhear as páginas, seu coração afundou.</p> <p>As palavras eram nada além de rabiscos incompreensíveis, símbolos e caracteres que se retorciam como serpentes enredadas. Uma língua esquecida, reservada apenas aos magos.</p> <p>Ayla cerrou os dentes. O conhecimento estava ali, ao seu alcance, mas era inútil para alguém que não dominava a antiga escrita mágica.</p> <p>E pior ainda… o livro começou a brilhar.</p> <p>A magia dentro dele despertava. Um calor cresceu entre seus dedos, as páginas começaram a se mover sozinhas, e um sussurro ecoou pelo ar.</p> <p>Atrás dela, o mago despertou.</p> <p>— O que você fez? — Sua voz soou como um trovão na pequena cabana.</p> <p>Ayla congelou. Seu corpo inteiro ficou tenso enquanto o brilho do livro crescia.</p>",
			choices: [
				{
					choice: "FIM",
					destination: "instrucoes"
				}
			]
		},

		confrontarMagoUsandoPoderes: {
			title: "CONFRONTAR O MAGO USANDO SEUS PODERES",
			image: "img/imagem01.webp",
			story: "<p>Ayla fechou os olhos e começou a dedilhar as cordas de seu alaúde, deixando que a melodia fluísse suavemente pelo ar. As notas pareciam dançar como faíscas invisíveis, entrelaçando-se na mente do velho mago. A princípio, ele resistiu, apertando os olhos como se tentasse afastar um pensamento intrusivo. Mas era tarde demais.</p> <p>A magia da música já havia se infiltrado.</p> <p>O olhar do mago ficou distante, e seus ombros relaxaram, como se um peso invisível fosse retirado de suas costas. Um sorriso leve e vazio surgiu em seus lábios. Ayla percebeu o momento exato em que a resistência se desfez.</p> <p>— O Elixir da Vida… — ele murmurou, sua voz agora dócil, sem a firmeza de antes.</p> <p>Ayla se inclinou para frente, contendo a ansiedade.</p> <p>— Conte-me tudo — ela sussurrou.</p> <p>Os olhos do mago brilharam sob o efeito do encantamento, e as palavras fluíram de sua boca como um rio descontrolado.</p> <p>— Para criar o elixir… você deve reunir a energia vital dos jovens mais fortes e vibrantes das vilas por onde passar. Quanto mais puros e cheios de vida forem, mais poderoso o elixir se tornará.</p> <p>Ayla sentiu um arrepio subir por sua espinha. Finalmente, a peça que faltava. O conhecimento proibido agora pertencia a ela.</p> <p>O plano formou-se em sua mente como uma pintura sendo traçada com exatidão: ela viajaria de vila em vila, organizando luxuosos bailes. A música encantaria os convidados, fazendo-os dançar até se perderem em sua melodia hipnotizante. E enquanto giravam e riam, embriagados pelo encanto, Ayla absorveria sua vitalidade, cada batida do tambor drenando a força daqueles ao seu redor.</p> <p>Seria perfeito.</p> <p>Ela fechou o alaúde com um acorde final e o silêncio tomou conta da cabana. O mago piscou algumas vezes, confuso, como se tentasse lembrar do que acabara de dizer. Ayla já se erguia, ajeitando sua capa, um sorriso satisfeito dançando em seus lábios.</p> <p>— Obrigada pela informação — disse ela, virando-se para a porta.</p> <p>Antes que ele pudesse reagir, Ayla já havia desaparecido na noite. Seu próximo destino? A primeira vila. O primeiro baile. O primeiro sacrifício.</p> ",
			choices: [
				{
					choice: "AYLA MANIPULA SUAS MNETES PARA QUE DAMCEM ATÉ A EXAUSTÃO.",
					destination: "alyaManipulaMentes"
				},
				{
					choice: "AYLA FINGE BONDADE PARA EXTRAIR O ELIXIR SEM QUE PERCEBAM.",
					destination: "aylaFingeBondade"
				}
			]
		},

		alyaManipulaMentes: {
			title: "AYLA MANIPULA SUAS MNETES PARA QUE DAMCEM ATÉ A EXAUSTÃO.",
			image: "img/imagem01.webp",
			story: "<p>O salão ainda ecoava com os últimos acordes da melodia encantada. O ar estava pesado, carregado com o calor da dança e da magia que havia se infiltrado em cada convidado. Ayla observava dos cantos do salão, um sorriso satisfeito nos lábios. O ritual havia sido um sucesso.</p> <p>Os jovens que haviam dançado a noite toda agora estavam exaustos, suas faces pálidas, os olhos vidrados, como se a vitalidade tivesse sido sugada de dentro deles. Ayla sentia a energia recém-adquirida pulsando em suas veias, cada batida de seu coração vibrando com um poder renovado.</p> <p>Mas algo estava errado.</p> <p>O burburinho na vila crescia. Um dos aldeões, um homem de rosto severo e olhar desconfiado, apontou para os jovens sentados nos cantos, sem forças sequer para erguer um copo de vinho.</p> <p>O alerta foi o suficiente para que outros começassem a murmurar entre si. Ayla sentiu o perigo crescendo, a tensão no ar se tornando sufocante. Se não agisse rápido, seria cercada.</p> <p>Ela deu um passo para trás, os dedos já se movendo discretamente, preparando a próxima melodia mágica. Mas antes que pudesse começar a tocar, um grupo de aldeões se colocou entre ela e a saída.</p> <p>— Você fez algo com eles, não foi? — acusou uma mulher de olhos arregalados. — Sua música… havia algo de errado nela!</p> <p>O sangue de Ayla gelou. Eles sabiam. Ou pelo menos suspeitavam o bastante para não deixá-la sair sem uma explicação.</p> <p>Sem alternativa, ela ergueu o alaúde e dedilhou freneticamente uma nova melodia. A canção se espalhou pelo ar como um feitiço invisível, seus acordes se infiltrando na mente dos aldeões, dobrando sua vontade.</p> <p>As expressões de fúria e desconfiança suavizaram, os olhos ficaram distantes.</p> <p>Mas algo estava errado.</p> <p>A magia fluía mais fraca. O desgaste do ritual, a energia drenada dos jovens… tudo isso havia cobrado um preço. Seu poder não estava tão forte quanto antes.</p>",
			choices: [
				{
					choice: "FAZER UM BAILE EM OUTRA VILA.",
					destination: "faerBaileOutraVila"
				}
			]
		},


		aylaFingeBondade: {
			title: "AYLA FINGE BONDADE PARA EXTRAIR O ELIXIR SEM QUE PERCEBAM.",
			image: "img/imagem01.webp",
			story: "<p>A noite estava chegando ao fim, e Ayla observava discretamente os convidados, analisando os efeitos sutis de sua magia. O baile havia sido um sucesso — a música fluíra como um encantamento invisível, guiando os corpos dos aldeões em uma dança envolvente, seus passos cada vez mais leves, suas risadas cada vez mais soltas. A energia deles havia sido colhida em cada giro, cada acorde, cada batida do tambor.</p> <p>Embora sentisse o poder recém-adquirido pulsando dentro de si, sabia que não era suficiente. O fluxo de energia drenado naquela noite havia sido menor do que o esperado. Talvez os convidados não tivessem dançado o suficiente. Talvez estivessem menos vibrantes do que imaginara. De qualquer forma, o resultado era claro: o elixir ainda não estava completo.</p> <p>Ayla disfarçou a frustração e manteve um sorriso sedutor nos lábios enquanto os convidados se despediam. Ninguém parecia suspeitar. Nenhum olhar desconfiado, nenhuma voz alarmada. Apenas cansaço e satisfação estampados nos rostos daqueles que se retiravam para suas casas, acreditando terem vivido apenas mais uma noite inesquecível, fazendo com que pouca suspeita fosse levantada.</p> <p>Se quisesse concluir o ritual e finalmente criar o tão cobiçado Elixir da Vida, precisaria organizar outro baile em breve.</p>",
			choices: [
				{
					choice: "FAZER UM BAILE NA MESMA VILA.",
					destination: "faerBaileMesmaVila"
				}
			]
		},

		faerBaileMesmaVila: {
			title: "FAZER UM BAILE NA MESMA VILA.",
			image: "img/imagem01.webp",
			story: "<p>Ayla estava decidida. A vila estava repleta de energia ainda fresca da noite anterior, e ela sabia que poderia aproveitar a boa vontade dos aldeões antes que qualquer suspeita surgisse. Seus olhos brilharam com o reflexo das chamas de suas velas, o som das cordas de seu alaúde soando como um convite irresistível. Ela planejou tudo nos mínimos detalhes, prometendo a si mesma que seria perfeito. Um baile ainda mais grandioso, mais envolvente do que o anterior.</p> <p>Convidou todos os aldeões para um evento especial. Uma noite de celebração, dança e música, onde todos poderiam se esquecer das preocupações diárias. Quando os primeiros aldeões começaram a chegar, ela percebeu olhares suspeitos trocando-se entre eles. A energia da vila estava diferente daquela noite. Como se uma sombra pairasse sobre as mentes das pessoas. Ayla ignorou a sensação, esperando que a música, como sempre, fosse a chave para aliviar qualquer tensão.</p> <p>Mas, à medida que a noite avançava, os suspiros de desconfiança tornaram-se mais evidentes. As conversas em sussurros, as trocas de olhares furtivos. Quando ela subiu ao palco improvisado, já sentia a mudança no ar, mas era tarde demais. A música já estava tocando, e não havia como voltar atrás.</p> <p>De repente, alguém se levantou no meio da pista de dança, apontando para Ayla.</p> <p>— Ela! — a mulher gritou. — Foi ela quem fez nossos filhos e netos caírem, quem os deixou fracos!</p> <p>A multidão se voltou contra ela em um instante. Ayla tentou lançar uma magia para desviar os olhos e acalmar a raiva crescente, mas seus poderes estavam enfraquecidos, e a magia não surtiu efeito. Os aldeões estavam furiosos, e a verdade já tinha sido revelada.</p> <p>— Você nos enganou, bruxa! — alguém gritou. — Você sugou nossas vidas!</p> <p>Ayla sentiu o pânico crescer, mas seu corpo estava pesado, e suas pernas não respondiam tão rápido quanto deveria. Tentou escapar, mas a multidão a cercou, sua fúria alimentada pela dor de seus entes queridos.</p> <p>Com rapidez aterradora, eles a arrastaram até a praça central. O velho poço comunitário, o centro da vila onde tantas festas haviam começado, tornou-se o palco de sua condenação. O fogo já estava aceso.</p> <p>Eles a empurraram em direção à fogueira.</p>",
			choices: [
				{
					choice: "FIM",
					destination: "instrucoes"
				}
			]
		},

		faerBaileOutraVila: {
			title: "FAZER UM BAILE EM OUTRA VILA.",
			image: "img/imagem01.webp",
			story: "<p>Ayla seguiu para uma nova vila, um lugar onde ninguém conhecia seu rosto ou seu nome. Era um local próspero, com casas bem cuidadas e um mercado movimentado durante o dia. Mas foi ao anoitecer que Ayla começou sua verdadeira obra.</p> <p>Com sua magia, espalhou rumores sobre um baile luxuoso, uma festa como nunca antes vista, onde vinho, música e dança se estenderiam até o nascer do sol. Em poucas horas, a notícia se espalhou como fogo em palha seca. Jovens ansiosos e nobres curiosos se preparavam para a grande noite, desejando vivenciar a experiência misteriosa que Ayla prometia.</p> <p>E então, a noite chegou.</p> <p>A música preenchia o ar como um feitiço hipnótico, cada nota vibrando nos ossos dos convidados, guiando seus passos na dança.</p> <p>E enquanto se moviam ao ritmo da música, Ayla sentia sua energia sendo drenada, fluindo silenciosamente para ela. Era um fluxo constante, invisível aos olhos mortais, mas potente o suficiente para acender um brilho profundo dentro dela.</p> <p>Dessa vez, não havia erro. Não havia falha.</p> <p>Quando a festa começou a enfraquecer e os convidados caíram no cansaço, Ayla soube que havia reunido o suficiente. Sentiu o poder vibrar em suas veias, a energia vital daqueles jovens agora incorporada.</p> <p>Com um último olhar para os convidados exaustos e satisfeitos, Ayla deslizou pela noite, desaparecendo antes que o primeiro raio de sol. O Elixir estava completo. E com ele, Ayla agora segurava o destino em suas mãos.</p> <p>EM BUSCA DA VIELA DE RODA</p> ",
			choices: [
				{
					choice: "ENTRAR NO VILAREJO DISFARÇADA",
					destination: "entrarVilarejoDisfarçada"
				},
				{
					choice: "EVITAR O VILAREJO E IR PELO BOSQUE",
					destination: "evitarVilarejoIrPeloBosque"
				}
			]
		},

		entrarVilarejoDisfarçada: {
			title: "ENTRAR NO VILAREJO DISFARÇADA",
			image: "img/imagem01.webp",
			story: "<p>Ayla envolve-se em uma aura de encantamento, tornando-se quase invisível aos olhos dos aldeões.</p> <p>Foi então que ela avistou a taverna. O prédio era antigo, com uma fachada de madeira escura e uma luz suave que escapava pelas janelas, iluminando o caminho até a porta. Um grupo de aldeões estava reunido na entrada, rindo e conversando, mas ninguém parecia notar Ayla enquanto ela se aproximava, ainda envolta em sua magia.</p> <p>O som suave de uma flauta e uma guitarra começaram a se misturar com as vozes abafadas. Um bardo estava no centro do salão, cantando uma melodia suave, e o que mais chamou a atenção de Ayla foi o nome que ele mencionou: Viela de Roda.</p> <p>Seu coração acelerou ao perceber que ele estava contando uma antiga lenda sobre o instrumento.</p> <p>'Na Viela de Roda, as cordas tocam não apenas música, mas o próprio destino... A quem a tocar, o poder será concedido'</p> <p>As palavras do bardo ecoaram em sua mente. Ayla se aproximou mais, sua curiosidade crescendo. Os detalhes da história eram vagos, mas ali, entre risos e canções, ela poderia encontrar algo que a guiasse mais perto de seu objetivo.</p>",
			choices: [
				{
					choice: "USAR MAGIA PARA MANIPULAR O BARDO",
					destination: "usarMagiaManipularBard"
				},
				{
					choice: "Aguardar o momento certo para se informar discretamente.",
					destination: "aguardarMomentoCerto"
				}
			]
		},

		evitarVilarejoIrPeloBosque: {
			title: "EVITAR O VILAREJO E IR PELO BOSQUE",
			image: "img/imagem01.webp",
			story: "<p>Ayla parou na encruzilhada que levava à vila. Poderia entrar furtivamente e buscar informações entre os aldeões, mas algo dentro dela lhe dizia que o verdadeiro caminho não estava entre as casas de pedra e as ruas de paralelepípedos. Não, seu destino era mais sombrio, mais solitário.</p> <p>Puxando o capuz sobre os cabelos, ela virou-se para o bosque. A trilha diante dela era estreita e sinuosa, engolida pelas sombras das árvores retorcidas que pareciam sussurrar segredos antigos ao vento. O ar carregava umidade e um cheiro terroso de musgo e folhas úmidas. Cada passo ecoava entre as raízes, e a quietude do ambiente fez um arrepio percorrer sua espinha.</p> <p>Ela conhecia bem os perigos das florestas esquecidas. Eram lugares de mistérios, onde o tempo se dobrava e os perdidos jamais encontravam o caminho de volta. Mas Ayla não hesitou. Com cada passo, sua determinação crescia, e sua magia pulsava sob a pele, guiando-a como um farol invisível.</p> <p>Após horas de caminhada, a vegetação começou a se abrir, revelando uma clareira banhada pela luz prateada da lua. No centro, um círculo de pedras antigas se erguia como sentinelas silenciosas de um tempo esquecido. Musgo cobria as superfícies rugosas, e inscrições antigas estavam entalhadas em sua base.</p>",
			choices: [
				{
					choice: "Opisçao01",
					destination: "Opisçao01"
				},
				{
					choice: "Opisçao02",
					destination: "Opisçao02"
				}
			]
		},


		Opisçao01: {
			title: "Opisçao01",
			image: "img/imagem01.webp",
			story: "<p>O vento cortante varria a clareira, agitando as folhas secas ao redor das pedras antigas. Ayla sabia que o círculo de pedras escondia segredos que poderiam guiá-la à Viela de Roda, mas não seria fácil arrancá-los do tempo. Inspirando fundo, ela se ajoelhou no centro da formação e fechou os olhos, sentindo o pulsar da magia sob a terra.</p> <p>Com movimentos cuidadosos, desenhou símbolos arcanos na terra úmida, traçando um padrão complexo que brilhava em tons azulados sob a luz da lua. Seus lábios murmuravam palavras esquecidas, um feitiço de invocação destinado a atrair espíritos guardiões. Se houvesse conhecimento perdido naquele lugar, eles o trariam.</p> <p>A princípio, o bosque permaneceu em silêncio absoluto. Mas então, um frio cortante tomou conta do ar, e a clareira pareceu se fechar ao redor de Ayla. Sussurros emergiram das sombras, línguas antigas se entrelaçando como um canto fúnebre. Aos poucos, figuras translúcidas tomaram forma diante dela. Espíritos de tempos imemoriais, seus olhos vazios brilhando com um brilho etéreo.</p> <p>— Quem ousa nos chamar? — suas vozes ecoaram em uníssono, carregadas de julgamento.</p> <p>Ayla manteve-se firme, erguendo o queixo.</p> <p>— Sou Ayla, da linhagem que nasceu da Viela de Roda. Exijo saber sua localização.</p> <p>Os espíritos se entreolharam, e uma gargalhada áspera cortou o silêncio.</p> <p>— Exigir? Não és digna de tal conhecimento. Prove sua força… ou pague com sua alma.</p> <p>Antes que Ayla pudesse reagir, os espíritos avançaram. Correntes de energia sombria serpenteavam pelo ar, atacando-a como chicotes espectrais. Ayla ergueu as mãos, conjurando um escudo de luz para bloquear o impacto, mas cada golpe drenava sua força.</p> <p>Ela sabia que não podia recuar. Com um grito, canalizou sua magia através da melodia de um cântico antigo, um feitiço de controle que tentaria dobrar a vontade dos espíritos. A clareira iluminou-se em tons dourados e azulados, enquanto a batalha se intensificava. Os espíritos rugiram, resistindo, mas Ayla era astuta—e implacável. Com um último surto de energia, desfez as sombras e os forçou a ceder.</p> <p>Os espíritos hesitaram, então se curvaram em resignação.</p> <p>— Venceste, jovem feiticeira. Que a verdade não seja tua ruína.</p> <p>O mais velho deles ergueu uma mão e apontou para Ayla. Imagens inundaram sua mente: um mausoléu esquecido, selado por runas antigas. Uma cripta escondida nas profundezas do território de sua família. Era ali que a Viela de Roda descansava.</p>",
			choices: [
				{
					choice: "DESTRUIR A VIELA IMEDIATAMENTE",
					destination: "destruirVi"
				},
				{
					choice: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
					destination: "tocarVielaRoda"
				}
			]
		},

		Opisçao02: {
			title: "Opisçao02",
			image: "img/imagem01.webp",
			story: "<p>Ayla ajoelhou-se diante das pedras antigas, os dedos deslizando cuidadosamente sobre as inscrições cobertas pelo tempo. O vento soprou entre as árvores, carregando consigo um sussurro quase imperceptível, como se o próprio bosque lhe observasse. Inspirando fundo, ela decidiu que não usaria magia. Qualquer perturbação no fluxo natural da energia poderia atrair presenças indesejadas, e Ayla não podia se dar ao luxo de chamar atenção.</p> <p>Ela estreitou os olhos, analisando os símbolos e conectando-os às antigas histórias que ouvira ao longo de sua jornada. Pouco a pouco, as palavras começaram a fazer sentido. As inscrições falavam sobre a Viela de Roda, descrevendo-a não apenas como um instrumento, mas como um objeto de poder selado por encantamentos ancestrais. Para encontrá-la, seria necessário recuperar uma chave sagrada, oculta em uma vila próxima.</p> <p>Um suspiro escapou dos lábios de Ayla. Evitar o contato humano parecia ter sido a decisão mais segura, mas agora ela percebia que essa escolha poderia ter custado tempo precioso. Se tivesse se infiltrado na vila anterior, talvez já tivesse informações sobre essa chave.</p> <p>Ainda assim, tudo não estava perdido. E Ayla consegue a chave para a cripta.</p>",
			choices: [
				{
					choice: "DESTRUIR A VIELA IMEDIATAMENTE",
					destination: "destruirVi"
				},
				{
					choice: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
					destination: "tocarVielaRoda"
				}
			]
		},

		usarMagiaManipularBard: {
			title: "USAR MAGIA PARA MANIPULAR O BARDO",
			image: "img/imagem01.webp",
			story: "<p>Ayla sabia que este momento era crucial. Com a magia pulsando em suas veias, ela se aproximou do bardo com passos suaves, como uma sombra, e sentou-se discretamente ao seu lado. O som de sua canção ainda preenchia o ar, mas Ayla estava focada em algo mais.</p> <p>Ela lançou um feitiço sutil, envolvendo sua mente e a do bardo em uma teia de encantamento. Seus olhos brilharam de poder enquanto manipulava suas memórias, suavemente distorcendo a realidade para que ele a visse apenas como uma amiga e confidente. No fundo da mente do bardo, um desejo irresistível de revelar a verdade surgia, sem que ele percebesse a verdadeira fonte dessa urgência.</p> <p>'Fale-me sobre a Viela de Roda', ela murmurou, sua voz quase imperceptível. O bardo, agora completamente sob seu controle, olhou para ela com um olhar distante, como se estivesse sendo puxado por uma força invisível.</p> <p>‘A Viela...', ele começou, com a voz trêmula, 'ela está escondida... em uma cripta antiga... nas profundezas do bosque sagrado... apenas os mais sábios conhecem o caminho.’</p> <p>Ayla sorriu por dentro, sentindo o calor da vitória. A informação estava exatamente onde ela queria. Mas, enquanto ele falava, ela sentiu algo estranho no ar. A atmosfera na taverna parecia mudar.</p> <p>Os aldeões, que até então estavam distraídos com o som da música e a conversa, começaram a lançar olhares suspeitos em sua direção. O encanto que Ayla havia lançado sobre o bardo era forte, mas não era perfeito. Havia algo na forma como ele olhava para os outros, algo que começava a levantar dúvidas. A tensão na sala se intensificava.</p> <p>Ayla não podia mais hesitar. Com um último olhar para a porta da taverna, ela sabia que sua única chance era fugir agora, antes que fosse cercada. Ela usou sua magia para criar uma ilusão em torno de si mesma, fazendo com que parecesse desaparecer na multidão, mas os olhares acusadores já estavam se fixando nela.</p> <p>Ela correu pelas ruas escuras, ouvindo os gritos de 'bruxa! e 'fraude!' ecoando atrás de si. Seus pés batiam com força no chão, e o som dos aldeões vindo em sua direção se aproximava rapidamente. Ayla sabia que, por enquanto, a única opção era escapar. Ela deixou para trás pistas sutis de sua presença — uma flor caída, uma pequena marca em uma parede, pequenas evidências de que a perseguição logo seguiria.</p> <p>Mas ela estava determinada. A Viela de Roda estava mais próxima, e ela não permitiria que nada a impedisse de alcançá-la e Ayla consegue chegar a cripta onde a viela está guardada e se depara com uma escolha final</p>",
			choices: [
				{
					choice: "DESTRUIR A VIELA IMEDIATAMENTE",
					destination: "destruirVi"
				},
				{
					choice: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
					destination: "tocarVielaRoda"
				}
			]
		},

		aguardarMomentoCerto: {
			title: "Aguardar o momento certo para se informar discretamente.",
			image: "img/imagem01.webp",
			story: "<p>Ayla decidiu que, para não arriscar ser descoberta, o melhor seria observar com cautela os frequentadores da taverna e esperar por um momento oportuno. Sua magia a fazia invisível, mas o ambiente ainda era carregado de risco. Qualquer erro poderia colocar tudo a perder.</p> <p>Foi quando seus olhos caíram sobre um homem de aparência distinta. Ele estava sentado à mesa mais próxima ao balcão, sua postura ereta e o olhar atento, sem se deixar levar pela música ou pelas risadas. O homem usava uma túnica de um tecido mais fino e ostentava um símbolo religioso em seu pescoço. Ayla percebeu imediatamente que ele era alguém importante — um líder.</p> <p>O sacerdote. Ela concentrou sua atenção, observando-o cuidadosamente enquanto ele interagia com os outros aldeões. Aos poucos, os murmúrios e fragmentos de conversas começaram a fazer sentido. O sacerdote não só era o líder espiritual da vila, mas também o guardião da chave para a cripta onde o lendário instrumento, a Viela de Roda, estava escondido.</p> <p>Ayla sentiu uma onda de determinação. A chave estava ao alcance, mas para obtê-la, ela teria que ser astuta.</p> <p>Depois de muito custo Ayla consegue a chave da cripta sem ser notada, chegando lá ela se depara com uma escolha final.</p>",
			choices: [
				{
					choice: "DESTRUIR A VIELA IMEDIATAMENTE",
					destination: "destruirVi"
				},
				{
					choice: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
					destination: "tocarVielaRoda"
				}
			]
		},

		destruirVi: {
			title: "DESTRUIR A VIELA IMEDIATAMENTE",
			image: "img/imagem01.webp",
			story: "<p>O ar ao redor de Ayla crepitava com energia enquanto ela erguia as mãos sobre a Viela de Roda, o instrumento ancestral que havia condenado sua existência. A madeira antiga pulsava, como se a magia de gerações tentasse resistir ao destino que ela escolhera. Seu coração batia forte, mas sua decisão já estava tomada.</p> <p>Com um último feitiço, Ayla invocou uma explosão de luz e chamas, envolvendo a Viela em um fogo etéreo. O som que ecoou foi algo além do físico—não era apenas madeira quebrando, mas um vínculo mágico se desfazendo, um eco ancestral sendo silenciado para sempre.</p> <p>Ela sentiu a magia ser arrancada de suas veias. A energia que por tanto tempo a sustentou se esvaía como areia entre os dedos. Ayla caiu de joelhos, ofegante, sentindo-se simultaneamente vazia e livre. Pela primeira vez, ela não era um nome preso a um legado, não era a falha de uma linhagem ou uma ameaça a ser temida.</p> <p>Longe dali, sua família sentiu o impacto. Feiticeiros e anciões que se vangloriavam de seus dons perceberam, em um instante de terror, o quão fraco estavam e que seu poder desaparecera para sempre. Não importava quão distantes estivessem—o laço que os ligava à Viela de Roda havia sido cortado, e agora eram apenas humanos comuns.</p> <p>Ayla, por outro lado, ainda tinha algo. O Elixir da Vida que ela preparara sustentava sua força física, tornando-a mais resistente e mais sábia do que antes. Mesmo sem magia, ainda era uma mulher renascida, moldada pela dor e pela vingança, mas livre para finalmente escrever seu próprio destino.</p> <p>Sem olhar para trás, Ayla seguiu adiante, deixando as cinzas do passado se perderem ao vento.</p> ",
			choices: [
				{
					choice: "Introdução",
					destination: "instrucoes"
				}
			]
		},

		tocarVielaRoda: {
			title: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
			image: "img/imagem01.webp",
			story: "<p>Ayla envolveu a Viela de Roda com as mãos trêmulas, sentindo a madeira fria pulsar como se estivesse viva. O instrumento parecia sussurrar, suas cordas vibrando com um convite irresistível. Ela hesitou por um momento. Destruí-lo significava o fim do legado de sua família. Tocá-lo, por outro lado, poderia torná-la mais forte do que jamais sonhou ser.</p> <p>Inspirando fundo, Ayla passou os dedos sobre as cordas e, com um movimento preciso, arrancou a primeira nota. O som ecoou pelo salão abandonado, e, num instante, a realidade se distorceu ao seu redor. A música não era apenas melodia—era um feitiço poderoso, um redemoinho de magia ancestral que a envolveu como um abraço sufocante.</p> <p>Seus olhos se arregalaram quando sentiu a energia invadir seu corpo. Cada acorde pulsava dentro dela, expandindo seu ser além dos limites humanos. Ela estava se tornando algo maior, algo inominável. O poder fluiu por suas veias como um rio furioso, preenchendo cada parte de sua alma com uma fome insaciável.</p> <p>Mas havia um preço.</p> <p>O êxtase deu lugar ao desespero quando Ayla percebeu que não conseguia parar. Seu corpo queimava por dentro, sua pele cintilava em sombras dançantes, e sua mente se fragmentava. Ela não era mais Ayla.</p> <p>A Viela de Roda havia vencido.</p> <p>Agora, ela era apenas um eco da própria ambição, uma sombra faminta, eternamente presa ao ciclo de poder que jurara destruir.</p> <p>E a Viela, intacta e resplandecente, aguardava pacientemente pelo próximo tolo que ousasse tocá-la.</p> ",
			choices: [
				{
					choice: "Introdução",
					destination: "instrucoes"
				}
			]
		},

		modelo: {
			title: "APRIMORAR PODERES",
			image: "img/imagem01.webp",
			story: "<p></p>",
			choices: [
				{
					choice: "R",
					destination: "R"
				},
				{
					choice: "R",
					destination: "R"
				}
			]
		},

		finalruim: {
			title: "Final Ruim",
			image: "img/imagem02.webp",
			story: "<h3 >Você não pegou o item... Tente novamente!</h3>",
			choices: [
				{
					choice: "Introdução",
					destination: "instrucoes"
				}
			]
		},

		instrucoes: {
			title: "Instruções",
			story: "<h3><center>Recomendação Etária: Livre</center></h3><h3>Para jogar uma aventura-solo, basta ler o texto apresentado, e no final, clicar sobre a decisão escolhida. Como exemplo, temos 2 opções:</h3><h3>- A primeira delas é a opção de 'Começar a Aventura', onde você irá ler o trecho introdutório do texto, identificando o personagem que você irá interpretar;</h3><h3>- A segunda opção é a de retornar a 'Tela Inicial' do jogo.</h3><h3>No caso dessa aventura-solo, é utilizado o sistema de regras <a href='https://operarpg.com.br' class='classe1' target='blank'>OPERA RPG</a>; caso queira ler um resumos das regras, consulte o <a href='https://operarpg.com.br/opereta/' class='classe1' target='blank'>OPEReta</a>.</h3><h3>Existe um botão flutuante no canto inferior da tela. Ele permite ver a ficha de personagem na mesma ou em outra janela.</h3><h3>Existe mais de um final possível deste jogo, por isso você poder jogar novamente escolhendo opções diferentes das anteriormente escolhidas.</h3><h3>Após as opções de escolha da narrativa, existe o controle (de 4 botões) de uma trilha sonora; recomendamaos escutá-la, caso seja possível.</h3>",
			choices: [
				{
					choice: "Começar a Aventura!",
					destination: "vingançaDeAyla"
				},
				{
					choice: "Tela Inicial",
					destination: "inicio"
				}
			]
		},

		creditos: {
			title: "Créditos",
			story: "<p><b>Autor:</b> Eloá de Lima Camilo <p><b>Programação:</b> Eloá de Lima Camilo e Leonardo Antônio de Andrade</p><p><b>Trilha Sonora: </b></p>&nbsp;&nbsp;<a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></h3>",
			choices: [
				{
					choice: "Começar a Aventura!",
					destination: "vingançaDeAyla"
				},
				{
					choice: "Tela Inicial",
					destination: "inicio"
				}
			]
		},

		inicio: {
			title: "Inicio",
			story: "<h3></h3>",
			choices: [
				{
					choice: ".",
					destination: "inicio"
				}
			]
		}

	}
}

//função para programação dos botões
document.addEventListener('DOMContentLoaded', function () {
	var button0 = document.querySelector('#button0');
	var button1 = document.querySelector('#button1');
	var button2 = document.querySelector('#button2');
	var button3 = document.querySelector('#button3');
	var content = document.querySelector('#content');
	button0.addEventListener('click', function () {
		story = getStory();
		renderScene();
	})
	button1.addEventListener('click', function () {
		if (cont == 0) {
			window.open("http://narrativas-interativas.ufscar.br", '_blank');
		}
		else {
			story = getStory();
			renderScene();
		}
	})
	button2.addEventListener('click', function () {
		if (cont == 0) {
			instrucoes = true;
		}
		story = getStory();
		renderScene();
	})
	button3.addEventListener('click', function () {
		if (cont == 0) {
			creditos = true;
		}
		story = getStory();
		renderScene();
	})
})

//função de renderização de conteúdo
function renderScene() {
	//console.log(cont);
	var image = "";
	var titulo = "";

	if (instrucoes) {
		story.currentScene = "instrucoes";
		master = true;
		instrucoes = false;
	}

	if (creditos) {
		story.currentScene = "creditos";
		master = true;
		creditos = false;
	}

	if (!story[story.currentScene].image) {
		image = "<img></img>";
	}

	if (story[story.currentScene].title == "Primeiro Dia") {
		titulo = story[story.currentScene].title;
	}


	//trecho de renderização do framework - não mexer
	document.getElementById("content").innerHTML = `
	<center><h1>${titulo}</h1></center>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `${story[story.currentScene].image}`
	}
	var button0 = document.querySelector("#button0");
	var button1 = document.querySelector("#button1");
	var button2 = document.querySelector("#button2");
	var button3 = document.querySelector("#button3");

	//console.log(story.currentScene);

	button0.addEventListener('click', function () {
		cont++;
		getInputValue(0);
	})

	if (button1 != null) {
		button1.addEventListener('click', function () {
			cont++;
			if (cont == 1 && master) {
				master = false;
				window.location.href = 'index.html';
			}
			getInputValue(1);
		})
	}
	if (button2 != null) {
		button2.addEventListener('click', function () {
			cont++;
			getInputValue(2);
		})
	}
	if (button3 != null) {
		button3.addEventListener('click', function () {
			cont++;
			getInputValue(3);
		})
	}
}

function getInputValue(x) {
	var inputs = document.querySelectorAll('input[type="button"]');
	story.currentScene = inputs[x].getAttribute('data-destination');
	renderScene();
	return;

}

function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices) {
		return ""
	}
	for (var i = 0; i < story[story.currentScene].choices.length; i++) {
		input += `
		<div>
			<center><input type="button" id="button${i}" data-destination=${story[story.currentScene].choices[i].destination} name="choices" class="button button${i}" value="${story[story.currentScene].choices[i].choice}"></center>
		</div>`
	}
	return input;
}
