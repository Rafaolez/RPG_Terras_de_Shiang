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
			image: "img/sair_da_vila.png",
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
			image: "img/ficar_na_vila_(2).png",
			story: "<h3>Ayla decidiu ficar. Apesar da dor, apesar da rejeição que corroía seu peito como ferrugem, ela acreditava que ainda poderia encontrar um lugar entre os seus. Talvez, se provasse seu valor, sua família finalmente enxergasse algo além da decepção em seu nome.</h3> <h3>Mas os dias passaram, e a realidade se tornou mais cruel do que ela imaginava.</h3> <h3>Nas ruas da vila, olhares se desviavam sempre que ela passava. Murmúrios seguiam seus passos como um vento frio. Os aldeões a tratavam como se fosse invisível, ou pior… como se sua presença contaminasse o ar ao seu redor.</h3> <h3>No mercado, as atendentes serviam os outros antes dela, ignorando sua presença até que não restasse escolha. Se tentava se aproximar das conversas na praça, o burburinho diminuía até que restasse apenas um silêncio incômodo. Quando ela partia, os sussurros retornavam, mais afiados do que lâminas.</h3> <h3>Mas nada doía mais do que o que acontecia dentro de casa. O salão onde antes se reuniam para as refeições estava mais frio, mais vazio, mesmo quando todos estavam ali. </h3> ",
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
			image: "img/fazer_um_baile_na_mesma.png",
			story: "<h3>Ayla não queria desistir. Por mais que a rejeição fosse dolorosa, uma parte dela ainda ansiava por pertencimento. Talvez houvesse uma chance de mudar as coisas, de ser vista não como um erro, mas como alguém que ainda poderia ser parte daquela família. </h3> <h3>Naquela noite, tomou coragem e se aproximou de sua mãe. Sua voz tremeu ao chamá-la, os olhos brilhando com uma esperança frágil.</h3> <h3>— Mãe… por favor, me escute. Eu sei que falhei com vocês, mas ainda sou sua filha. Não posso mudar o que sou, mas posso provar que mereço estar aqui.</h3> <h3>A mulher ergueu os olhos, seu rosto impassível. O silêncio entre as duas pareceu se arrastar por uma eternidade antes que ela finalmente respondesse.</h3> <h3>— Você nunca fez parte de nós, Ayla. Nunca foi digna do nosso sangue.</h3> <h3>Foi então que compreendeu: ela nunca seria aceita. Não importava o quanto tentasse, o quanto se esforçasse para ser vista. Sua família já havia decidido seu destino. E se ela quisesse mudá-lo, teria que fazer isso sozinha.</h3> <h3>Mas a pior parte ainda estava por vir.</h3> <h3>Os rumores começaram a se espalhar pela vila como um incêndio incontrolável. A ovelha negra da família mais poderosa da cidade estava tentando retornar. Para os aldeões, isso era um insulto. Como alguém tão indigna ousava buscar redenção? Como poderia querer se misturar entre aqueles que a desprezavam?</h3> <h3>O medo virou raiva. A raiva se transformou em ódio.</h3> <h3>E o ódio se tornou uma sentença.</h3> <h3>Na noite seguinte, Ayla foi arrancada de sua cama por mãos impiedosas. Seu grito se perdeu no ar enquanto era arrastada pelas ruas escuras, seus pés descalços raspando contra a terra fria. O cheiro de óleo e madeira queimada invadiu seu nariz antes mesmo de ver o que a aguardava.</h3> <h3>Na praça central, uma fogueira já estava acesa</h3> <h3>Seus pulsos foram amarrados, seu corpo preso ao poste de madeira. O calor da fogueira subiu por suas pernas, o cheiro de fumaça se tornando sufocante.</h3> <h3>— Que a vergonha seja purificada pelo fogo! — gritou alguém da multidão.</h3> <h3>…</h3> ",
			choices: [
				{
					choice: "FIM",
					destination: "creditos"
				}
			]
		},

		SairDaVila: {
			title: "SAIR DA VILAo",
			image: "img/Ayla_indignada_decide.png",
			story: "<h3>Atravessando as ruas estreitas da nova vila. As casas de pedra e madeira se alinhavam ao redor de uma pequena praça, onde feirantes vendiam ervas secas, tecidos e joias simples. Mas algo mais chamou sua atenção.</h3> <h3>Num canto da praça, um pequeno teatro de rua estava montado. Um palco improvisado, feito de tábuas gastas, servia de base para uma senhora de cabelos longos e prateados. Seu manto escuro esvoaçava ao vento enquanto ela falava, sua voz rouca tentando prender a atenção da plateia dispersa. Poucas pessoas se detinham para ouvir a história, mais interessadas em suas compras e conversas do dia.</h3> <h3>Curiosa, Ayla se aproximou, observando os gestos teatrais da mulher. Ela contava uma lenda — mas não era uma lenda qualquer.</h3> <h3>“Há muito tempo, um único instrumento foi responsável pelo poder de uma linhagem inteira. A Viela de Roda, forjada em magia e mistério, escolhia seus herdeiros e concedia a eles dons extraordinários. Mas o poder sempre tem um preço… um preço que poucos estão dispostos a pagar.”</h3> <h3>Ayla sentiu o coração acelerar. Seu corpo ficou tenso, e uma leve vertigem tomou conta dela. Aquilo não era apenas uma história para entreter aldeões desavisados. Ela sabia exatamente de qual linhagem aquela mulher falava.</h3> <h3>“Dizem que aquele que destruir a Viela libertará todas as almas presas ao seu legado. Mas cuidado…” — a velha fez uma pausa dramática, deixando o suspense pairar no ar antes de continuar — “…pois sem o Elixir da Vida, aquele que tocar na Viela pode perder tudo, até mesmo sua própria existência.”</h3> <h3>Os olhos de Ayla se arregalaram. O Elixir da Vida… Ela já ouvira esse termo antes. O elixir era a chave para sua sobrevivência e para o sucesso de sua missão.</h3> <h3>Ela observou atentamente a velha senhora, tentando absorver cada palavra. O destino a havia levado até ali, e ela não podia ignorar o chamado. Agora, Ayla não apenas sabia que precisava destruir a Viela de Roda, mas também entendia a importância de possuir o elixir antes que fosse tarde demais.</h3>",
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
			image: "img/Ayla_indignada_decide.png",
			story: "<h3>Ayla segue por uma trilha estreita no meio de um bosque sombrio, onde os raios de sol mal conseguem atravessar as copas densas das árvores, em busca de respostas. Após dias de viagem, ela encontra uma cabana escondida, feita de madeira escura e coberta de musgo. É o lar de uma anciã conhecida como Morgana, uma poderosa feiticeira que, segundo rumores, possui conhecimentos arcanos raros e perigosos. Ayla sente que este encontro pode ser a chave para desbloquear seu verdadeiro potencial, e saber mais da sua história.</h3> <h3>Ayla bate na porta, que se abre com um rangido. Morgana aparece, uma figura curvada com olhos brilhantes e uma voz que parece ecoar com segredos antigos.</h3> <h3>-Vejo que busca poder, criança. Mas o poder tem um custo. Você está disposta a pagar?</h3>",
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
			image: "img/Ayla_indignada_decide.png",
			story: "<h3>Ayla segue por uma trilha estreita no meio de um bosque sombrio, onde os raios de sol mal conseguem atravessar as copas densas das árvores, em busca de respostas. Após dias de viagem, ela encontra uma cabana escondida, feita de madeira escura e coberta de musgo. É o lar de uma anciã conhecida como Morgana, uma poderosa feiticeira que, segundo rumores, possui conhecimentos arcanos raros e perigosos. Ayla sente que este encontro pode ser a chave para desbloquear seu verdadeiro potencial, e saber mais da sua história.</h3> <h3>Ayla bate na porta, que se abre com um rangido. Morgana aparece, uma figura curvada com olhos brilhantes e uma voz que parece ecoar com segredos antigos.</h3> <h3>-Vejo que busca poder, criança. Mas o poder tem um custo. Você está disposta a pagar?</h3>",
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
			image: "img/Ayla_aceita_a_oferta_sem_hesitar.png",
			story: "<h3>Morgana ensina Ayla a canalizar sua magia através da música, amplificando sua influência sobre os outros. No entanto, o fio de cabelo permite que Morgana monitore Ayla, mantendo um vínculo permanente entre as duas.</h3>",
			choices: [
				{
					choice: "IR EM BUSCA DO ELIXIR E DE COMO FAZER",
					destination: "irEmBuscaDoElixir"
				},
				{
					choice: "APRIMORAR PODERES",
					destination: "aprimorarPoderes"
				}
			]
		},

		irEmBuscaDoElixir: {
			title: "ir em busca do elixir e de como fazer",
			image: "img/ir_em_busca_do_elixir.png",
			story: "<h3>Ayla caminha sob a luz pálida da lua, o peso de sua busca refletido em seus olhos. O Elixir da Vida, uma substância mística que promete poder e longevidade, é o próximo passo em sua jornada, em ele ao destruir a viela de roda além de enfraquecer toda sua linhagem enfraqueceria a si mesmo.</h3> <h3>Ela encontrou o mago recluso em sua cabana esquecida no meio da floresta. As ervas pendiam do teto, exalando um cheiro agridoce, e velas tremulavam nas prateleiras de madeira, projetando sombras inquietas nas paredes. Ele era um homem de idade indefinida, envolto em mantos gastos pelo tempo, os olhos carregando o fardo de muitos segredos.</h3> <h3>— Você sabe por que estou aqui. — Ayla disse, sua voz cortando o silêncio.</h3> <h3>O mago suspirou, apoiando-se no cajado com um olhar grave.</h3> <h3>— Há perguntas que não devem ser feitas, criança. — Sua voz era um eco rouco na pequena cabana.</h3> <h3>— Não sou uma criança — Ayla retrucou, dando um passo à frente. — Quero saber sobre o Elixir da Vida.</h3> <h3>O homem permaneceu em silêncio por um longo tempo, seus dedos ossudos apertando o cajado como se procurasse força nas fibras da madeira. Seus olhos se estreitaram, analisando Ayla como quem avalia o peso de uma decisão perigosa.</h3> <h3>— Esqueça esse nome. Esqueça essa busca. Há coisas que não devem ser tocadas, e o Elixir está entre elas.</h3> <h3>Ayla franziu o cenho, sua paciência se esgotando.</h3> <h3>— Você sabe onde encontrá-lo, não sabe?</h3> <h3>O mago se virou, pegando um punhado de ervas secas e jogando-as ao fogo. A chama crepitou, e um aroma denso preencheu o ar.</h3> <h3>— O Elixir é uma maldição tanto quanto é um presente — ele murmurou, como se falasse mais para si mesmo do que para ela. — Aqueles que o buscam raramente vivem para contar sua história.</h3> <h3>Ayla sentiu seu coração acelerar. O mago sabia algo.</h3> <h3>— Então me deixe decidir. Onde ele está?</h3> <h3>O homem se virou para ela, e pela primeira vez, seus olhos refletiam um misto de pena e advertência.</h3>",
			choices: [
				{
					choice: "CONFRINTAR O MAGO USANDO MAGIA",
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
			image: "img/confrontar_o_mago_usando.png",
			story: "Ayla sentiu a raiva fervilhar dentro de si. O mago se recusava a revelar o segredo do Elixir da Vida, ocultando informações que poderiam ser a chave para seu destino. Sua paciência se esgotara.</h3> <h3>— Se não me dirá por bem… — ela murmurou, erguendo a mão.</h3> <h3>Seus dedos se curvaram no ar, traçando símbolos arcanos enquanto sua magia pulsava como um trovão silencioso. O mago permaneceu imóvel, observando-a com olhos profundos e enigmáticos.</h3> <h3>— Você não sabe o que está fazendo, criança — disse ele calmamente.</h3> <h3>Mas Ayla ignorou o aviso. Com um gesto rápido, lançou um feitiço de controle, tentando dobrar a mente do mago à sua vontade. A energia se estendeu como fios invisíveis, enroscando-se ao redor dele. Por um breve momento, Ayla sentiu a magia funcionar—o ar ficou pesado, sua mente se expandiu, e o mundo pareceu pender ao seu favor.</h3> <h3>Então, tudo desmoronou.</h3> <h3>A magia revidou. Como uma serpente que se volta contra o encantador, a energia se retorceu e ricocheteou de volta para Ayla. O chão tremeu, uma luz esverdeada explodiu ao seu redor, e seu corpo foi tomado por uma sensação estranha e sufocante.</h3> <h3>Quando a fumaça dissipou, a cabana parecia muito maior do que antes. As mesas pareciam montanhas, as ervas pendiam do teto como árvores gigantescas. Algo estava errado.</h3> <h3>Ayla tentou falar, mas tudo o que saiu foi um 'croac'.</h3> <h3>Seus olhos arregalaram-se de horror. Tentou se levantar, mas suas pernas estavam encolhidas. Sua pele não era mais pele… era fria e escorregadia.</h3> <h3>Ela havia se transformado em um sapo.</h3> <h3>O mago suspirou, cruzando os braços enquanto olhava para a pequena criatura verde que coaxava desesperada no chão.</h3> <h3>— Eu avisei.</h3> <h3>Ele se abaixou, pegou Ayla com uma das mãos e colocou-a sobre a mesa.</h3>",
			choices: [
				{
					choice: "FIM",
					destination: "creditos"
				}
			]
		},

		alyaExigeSaber: {
			title: "Ayla exige saber o preço exato antes de concordar",
			image: "img/Ayla_aceita_a_oferta_sem_hesitar.png",
			story: "<h3>Morgana revela que deseja um pedaço da alma de Ayla, prometendo que o conhecimento oferecido valerá a pena. Ayla recusa o acordo, mas Morgana, impressionada com sua determinação, ensina um feitiço básico como prova de sua força.</h3>",
			choices: [
				{
					choice: "APRIMORAR PODERES",
					destination: "aprimorarPoderes"
				},
				{
					choice: "IR EM BUSCA DO ELIXIR E DE COMO FAZER",
					destination: "irEmBuscaDoElixir"
				}
			]
		},

		aprimorarPoderes: {
			title: "APRIMORAR PODERES",
			image: "img/aprimorar_poderes.png",
			story: "<h3>Após aprimorar seus poderes com Morgana, Ayla vai em busca do Elixir da Vida, uma substância mística que promete poder e longevidade, é o próximo passo em sua jornada, em ele ao destruir a viela de roda além de enfraquecer toda sua linhagem enfraqueceria a si mesmo.</h3> <h3>Ela encontrou o mago recluso em sua cabana esquecida no meio da floresta. As ervas pendiam do teto, exalando um cheiro agridoce, e velas tremulavam nas prateleiras de madeira, projetando sombras inquietas nas paredes. Ele era um homem de idade indefinida, envolto em mantos gastos pelo tempo, os olhos carregando o fardo de muitos segredos.</h3> <h3>— Você sabe por que estou aqui. — Ayla disse, sua voz cortando o silêncio.</h3> <h3>O mago suspirou, apoiando-se no cajado com um olhar grave.</h3> <h3>— Há perguntas que não devem ser feitas, criança. — Sua voz era um eco rouco na pequena cabana.</h3> <h3>— Não sou uma criança — Ayla retrucou, dando um passo à frente. — Quero saber sobre o Elixir da Vida.</h3> <h3>O homem permaneceu em silêncio por um longo tempo, seus dedos ossudos apertando o cajado como se procurasse força nas fibras da madeira. Seus olhos se estreitaram, analisando Ayla como quem avalia o peso de uma decisão perigosa.</h3> <h3>— Esqueça esse nome. Esqueça essa busca. Há coisas que não devem ser tocadas, e o Elixir está entre elas.</h3> <h3>Ayla franziu o cenho, sua paciência se esgotando.</h3> <h3>Ayla franziu o cenho, sua paciência se esgotando.</h3> <h3>O mago se virou, pegando um punhado de ervas secas e jogando-as ao fogo. A chama crepitou, e um aroma denso preencheu o ar.</h3> <h3>— O Elixir é uma maldição tanto quanto é um presente — ele murmurou, como se falasse mais para si mesmo do que para ela. — Aqueles que o buscam raramente vivem para contar sua história.</h3> <h3>Ayla sentiu seu coração acelerar. O mago sabia algo.</h3> <h3>— Então me deixe decidir. Onde ele está?</h3> <h3>O homem se virou para ela, e pela primeira vez, seus olhos refletiam um misto de pena e advertência.</h3>",
			choices: [
				{
					choice: "ROUBAR O LIVRO DO MAGO",
					destination: "roubarLivroMago"
				},
				{
					choice: "USAR MAGIA DE MANIPULAÇÃO",
					destination: "usaMagiaDeManipulacao"
				}
			]
		},

		roubarLivroMago: {
			title: "ROUBAR O LIVRO DO MAGO",
			image: "img/roubar_o_livro_do_mago.png",
			story: "<h3>Ayla cerrou os punhos. O mago se recusava a lhe dar qualquer informação sobre o Elixir da Vida, e cada palavra dele parecia um enigma indecifrável. Mas se ele não lhe diria por bem… ela encontraria outra forma.</h3> <h3>Assim que a noite caiu e o mago adormeceu em seu velho catre de palha, Ayla se moveu silenciosamente pela cabana. A única luz vinha das brasas moribundas na lareira, lançando sombras dançantes nas paredes de pedra. Seu olhar percorreu a sala até pousar em uma estante repleta de grimórios e pergaminhos antigos. E lá estava ele.</h3> <h3>Um livro grosso de capa de couro, cravejado com símbolos arcanos que brilhavam fracamente sob a luz fraca. A respiração de Ayla ficou presa na garganta. Aquilo tinha que ser o livro—o tomo onde o mago escondia seus segredos, talvez até mesmo o caminho para o Elixir.</h3> <h3>Com dedos ágeis, ela o puxou da prateleira e o abraçou contra o peito. O couro era frio e parecia vibrar sob suas mãos, como se o próprio conhecimento dentro dele tentasse escapar. Sem perder tempo, Ayla se afastou em direção à porta, ansiosa para desvendar seus mistérios.</h3> <h3>Mas, ao folhear as páginas, seu coração afundou.</h3> <h3>As palavras eram nada além de rabiscos incompreensíveis, símbolos e caracteres que se retorciam como serpentes enredadas. Uma língua esquecida, reservada apenas aos magos.</h3> <h3>Ayla cerrou os dentes. O conhecimento estava ali, ao seu alcance, mas era inútil para alguém que não dominava a antiga escrita mágica.</h3> <h3>E pior ainda… o livro começou a brilhar.</h3> <h3>A magia dentro dele despertava. Um calor cresceu entre seus dedos, as páginas começaram a se mover sozinhas, e um sussurro ecoou pelo ar.</h3> <h3>Atrás dela, o mago despertou.</h3> <h3>— O que você fez? — Sua voz soou como um trovão na pequena cabana.</h3> <h3>Ayla congelou. Seu corpo inteiro ficou tenso enquanto o brilho do livro crescia.</h3>",
			choices: [
				{
					choice: "FIM",
					destination: "creditos"
				}
			]
		},

		usaMagiaDeManipulacao: {
			title: "CONFRONTAR O MAGO USANDO SEUS PODERES",
			image: "img/confrontar_o_mago_usando_seus.png",
			story: "<h3>Ayla fechou os olhos e começou a dedilhar as cordas de seu alaúde, deixando que a melodia fluísse suavemente pelo ar. As notas pareciam dançar como faíscas invisíveis, entrelaçando-se na mente do velho mago. A princípio, ele resistiu, apertando os olhos como se tentasse afastar um pensamento intrusivo. Mas era tarde demais.</h3> <h3>A magia da música já havia se infiltrado.</h3> <h3>O olhar do mago ficou distante, e seus ombros relaxaram, como se um peso invisível fosse retirado de suas costas. Um sorriso leve e vazio surgiu em seus lábios. Ayla percebeu o momento exato em que a resistência se desfez.</h3> <h3>— O Elixir da Vida… — ele murmurou, sua voz agora dócil, sem a firmeza de antes.</h3> <h3>Ayla se inclinou para frente, contendo a ansiedade.</h3> <h3>— Conte-me tudo — ela sussurrou.</h3> <h3>Os olhos do mago brilharam sob o efeito do encantamento, e as palavras fluíram de sua boca como um rio descontrolado.</h3> <h3>— Para criar o elixir… você deve reunir a energia vital dos jovens mais fortes e vibrantes das vilas por onde passar. Quanto mais puros e cheios de vida forem, mais poderoso o elixir se tornará.</h3> <h3>Ayla sentiu um arrepio subir por sua espinha. Finalmente, a peça que faltava. O conhecimento proibido agora pertencia a ela.</h3> <h3>O plano formou-se em sua mente como uma pintura sendo traçada com exatidão: ela viajaria de vila em vila, organizando luxuosos bailes. A música encantaria os convidados, fazendo-os dançar até se perderem em sua melodia hipnotizante. E enquanto giravam e riam, embriagados pelo encanto, Ayla absorveria sua vitalidade, cada batida do tambor drenando a força daqueles ao seu redor.</h3> <h3>Seria perfeito.</h3> <h3>Ela fechou o alaúde com um acorde final e o silêncio tomou conta da cabana. O mago piscou algumas vezes, confuso, como se tentasse lembrar do que acabara de dizer. Ayla já se erguia, ajeitando sua capa, um sorriso satisfeito dançando em seus lábios.</h3> <h3>— Obrigada pela informação — disse ela, virando-se para a porta.</h3> <h3>Antes que ele pudesse reagir, Ayla já havia desaparecido na noite. Seu próximo destino? A primeira vila. O primeiro baile. O primeiro sacrifício.</h3> ",
			choices: [
				{
					choice: "MANIPULAR SUAS MENTES ATÉ EXAUSTÃO.",
					destination: "alyaManipulaMentes"
				},
				{
					choice: "FINGIR BONDADE PARA EXTRAIR O ELIXIR",
					destination: "aylaFingeBondade"
				}
			]
		},

		alyaManipulaMentes: {
			title: "AYLA MANIPULA SUAS MNETES PARA QUE DAMCEM ATÉ A EXAUSTÃO.",
			image: "img/Ayla_concentra_seus_esforços.png",
			story: "<h3>O salão ainda ecoava com os últimos acordes da melodia encantada. O ar estava pesado, carregado com o calor da dança e da magia que havia se infiltrado em cada convidado. Ayla observava dos cantos do salão, um sorriso satisfeito nos lábios. O ritual havia sido um sucesso.</h3> <h3>Os jovens que haviam dançado a noite toda agora estavam exaustos, suas faces pálidas, os olhos vidrados, como se a vitalidade tivesse sido sugada de dentro deles. Ayla sentia a energia recém-adquirida pulsando em suas veias, cada batida de seu coração vibrando com um poder renovado.</h3> <h3>Mas algo estava errado.</h3> <h3>O burburinho na vila crescia. Um dos aldeões, um homem de rosto severo e olhar desconfiado, apontou para os jovens sentados nos cantos, sem forças sequer para erguer um copo de vinho.</h3> <h3>O alerta foi o suficiente para que outros começassem a murmurar entre si. Ayla sentiu o perigo crescendo, a tensão no ar se tornando sufocante. Se não agisse rápido, seria cercada.</h3> <h3>Ela deu um passo para trás, os dedos já se movendo discretamente, preparando a próxima melodia mágica. Mas antes que pudesse começar a tocar, um grupo de aldeões se colocou entre ela e a saída.</h3> <h3>— Você fez algo com eles, não foi? — acusou uma mulher de olhos arregalados. — Sua música… havia algo de errado nela!</h3> <h3>O sangue de Ayla gelou. Eles sabiam. Ou pelo menos suspeitavam o bastante para não deixá-la sair sem uma explicação.</h3> <h3>Sem alternativa, ela ergueu o alaúde e dedilhou freneticamente uma nova melodia. A canção se espalhou pelo ar como um feitiço invisível, seus acordes se infiltrando na mente dos aldeões, dobrando sua vontade.</h3> <h3>As expressões de fúria e desconfiança suavizaram, os olhos ficaram distantes.</h3> <h3>Mas algo estava errado.</h3> <h3>A magia fluía mais fraca. O desgaste do ritual, a energia drenada dos jovens… tudo isso havia cobrado um preço. Seu poder não estava tão forte quanto antes.</h3>",
			choices: [
				{
					choice: "FAZER UM BAILE EM OUTRA VILA.",
					destination: "faerBaileOutraVila"
				},
				{
					choice: "FAZER UM BAILE NA MESMA VILA.",
					destination: "faerBaileMesmaVila"
				}
			]
		},


		aylaFingeBondade: {
			title: "AYLA FINGE BONDADE PARA EXTRAIR O ELIXIR SEM QUE PERCEBAM.",
			image: "img/Ayla_concentra_seus_esforços.png",
			story: "<h3>A noite estava chegando ao fim, e Ayla observava discretamente os convidados, analisando os efeitos sutis de sua magia. O baile havia sido um sucesso — a música fluíra como um encantamento invisível, guiando os corpos dos aldeões em uma dança envolvente, seus passos cada vez mais leves, suas risadas cada vez mais soltas. A energia deles havia sido colhida em cada giro, cada acorde, cada batida do tambor.</h3> <h3>Embora sentisse o poder recém-adquirido pulsando dentro de si, sabia que não era suficiente. O fluxo de energia drenado naquela noite havia sido menor do que o esperado. Talvez os convidados não tivessem dançado o suficiente. Talvez estivessem menos vibrantes do que imaginara. De qualquer forma, o resultado era claro: o elixir ainda não estava completo.</h3> <h3>Ayla disfarçou a frustração e manteve um sorriso sedutor nos lábios enquanto os convidados se despediam. Ninguém parecia suspeitar. Nenhum olhar desconfiado, nenhuma voz alarmada. Apenas cansaço e satisfação estampados nos rostos daqueles que se retiravam para suas casas, acreditando terem vivido apenas mais uma noite inesquecível, fazendo com que pouca suspeita fosse levantada.</h3> <h3>Se quisesse concluir o ritual e finalmente criar o tão cobiçado Elixir da Vida, precisaria organizar outro baile em breve.</h3>",
			choices: [
				{
					choice: "FAZER UM BAILE NA MESMA VILA.",
					destination: "faerBaileMesmaVila"
				},
				{
					choice: "FAZER UM BAILE EM OUTRA VILA.",
					destination: "faerBaileOutraVila"
				}
			]
		},

		faerBaileMesmaVila: {
			title: "FAZER UM BAILE NA MESMA VILA.",
			image: "img/fazer_um_baile_na_mesma.png",
			story: "<h3>Ayla estava decidida. A vila estava repleta de energia ainda fresca da noite anterior, e ela sabia que poderia aproveitar a boa vontade dos aldeões antes que qualquer suspeita surgisse. Seus olhos brilharam com o reflexo das chamas de suas velas, o som das cordas de seu alaúde soando como um convite irresistível. Ela planejou tudo nos mínimos detalhes, prometendo a si mesma que seria perfeito. Um baile ainda mais grandioso, mais envolvente do que o anterior.</h3> <h3>Convidou todos os aldeões para um evento especial. Uma noite de celebração, dança e música, onde todos poderiam se esquecer das preocupações diárias. Quando os primeiros aldeões começaram a chegar, ela percebeu olhares suspeitos trocando-se entre eles. A energia da vila estava diferente daquela noite. Como se uma sombra pairasse sobre as mentes das pessoas. Ayla ignorou a sensação, esperando que a música, como sempre, fosse a chave para aliviar qualquer tensão.</h3> <h3>Mas, à medida que a noite avançava, os suspiros de desconfiança tornaram-se mais evidentes. As conversas em sussurros, as trocas de olhares furtivos. Quando ela subiu ao palco improvisado, já sentia a mudança no ar, mas era tarde demais. A música já estava tocando, e não havia como voltar atrás.</h3> <h3>De repente, alguém se levantou no meio da pista de dança, apontando para Ayla.</h3> <h3>— Ela! — a mulher gritou. — Foi ela quem fez nossos filhos e netos caírem, quem os deixou fracos!</h3> <h3>A multidão se voltou contra ela em um instante. Ayla tentou lançar uma magia para desviar os olhos e acalmar a raiva crescente, mas seus poderes estavam enfraquecidos, e a magia não surtiu efeito. Os aldeões estavam furiosos, e a verdade já tinha sido revelada.</h3> <h3>— Você nos enganou, bruxa! — alguém gritou. — Você sugou nossas vidas!</h3> <h3>Ayla sentiu o pânico crescer, mas seu corpo estava pesado, e suas pernas não respondiam tão rápido quanto deveria. Tentou escapar, mas a multidão a cercou, sua fúria alimentada pela dor de seus entes queridos.</h3> <h3>Com rapidez aterradora, eles a arrastaram até a praça central. O velho poço comunitário, o centro da vila onde tantas festas haviam começado, tornou-se o palco de sua condenação. O fogo já estava aceso.</h3> <h3>Eles a empurraram em direção à fogueira.</h3>",
			choices: [
				{
					choice: "FIM",
					destination: "creditos"
				}
			]
		},

		faerBaileOutraVila: {
			title: "FAZER UM BAILE EM OUTRA VILA.",
			image: "img/fazer_um_baile_em_outra.png",
			story: "<h3>Ayla seguiu para uma nova vila, um lugar onde ninguém conhecia seu rosto ou seu nome. Era um local próspero, com casas bem cuidadas e um mercado movimentado durante o dia. Mas foi ao anoitecer que Ayla começou sua verdadeira obra.</h3> <h3>Com sua magia, espalhou rumores sobre um baile luxuoso, uma festa como nunca antes vista, onde vinho, música e dança se estenderiam até o nascer do sol. Em poucas horas, a notícia se espalhou como fogo em palha seca. Jovens ansiosos e nobres curiosos se preparavam para a grande noite, desejando vivenciar a experiência misteriosa que Ayla prometia.</h3> <h3>E então, a noite chegou.</h3> <h3>A música preenchia o ar como um feitiço hipnótico, cada nota vibrando nos ossos dos convidados, guiando seus passos na dança.</h3> <h3>E enquanto se moviam ao ritmo da música, Ayla sentia sua energia sendo drenada, fluindo silenciosamente para ela. Era um fluxo constante, invisível aos olhos mortais, mas potente o suficiente para acender um brilho profundo dentro dela.</h3> <h3>Dessa vez, não havia erro. Não havia falha.</h3> <h3>Quando a festa começou a enfraquecer e os convidados caíram no cansaço, Ayla soube que havia reunido o suficiente. Sentiu o poder vibrar em suas veias, a energia vital daqueles jovens agora incorporada.</h3> <h3>Com um último olhar para os convidados exaustos e satisfeitos, Ayla deslizou pela noite, desaparecendo antes que o primeiro raio de sol. O Elixir estava completo. E com ele, Ayla agora segurava o destino em suas mãos.</h3> <h3>EM BUSCA DA VIELA DE RODA</h3> ",
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
			image: "img/Ayla_decide_entrar_no_vilarejo_di.png",
			story: "<h3>Ayla envolve-se em uma aura de encantamento, tornando-se quase invisível aos olhos dos aldeões.</h3> <h3>Foi então que ela avistou a taverna. O prédio era antigo, com uma fachada de madeira escura e uma luz suave que escapava pelas janelas, iluminando o caminho até a porta. Um grupo de aldeões estava reunido na entrada, rindo e conversando, mas ninguém parecia notar Ayla enquanto ela se aproximava, ainda envolta em sua magia.</h3> <h3>O som suave de uma flauta e uma guitarra começaram a se misturar com as vozes abafadas. Um bardo estava no centro do salão, cantando uma melodia suave, e o que mais chamou a atenção de Ayla foi o nome que ele mencionou: Viela de Roda.</h3> <h3>Seu coração acelerou ao perceber que ele estava contando uma antiga lenda sobre o instrumento.</h3> <h3>'Na Viela de Roda, as cordas tocam não apenas música, mas o próprio destino... A quem a tocar, o poder será concedido'</h3> <h3>As palavras do bardo ecoaram em sua mente. Ayla se aproximou mais, sua curiosidade crescendo. Os detalhes da história eram vagos, mas ali, entre risos e canções, ela poderia encontrar algo que a guiasse mais perto de seu objetivo.</h3>",
			choices: [
				{
					choice: "USAR MAGIA PARA MANIPULAR O BARDO",
					destination: "usarMagiaManipularBard"
				},
				{
					choice: "SE INFORMAR DISCRETAMENTE",
					destination: "aguardarMomentoCerto"
				}
			]
		},

		evitarVilarejoIrPeloBosque: {
			title: "EVITAR O VILAREJO E IR PELO BOSQUE",
			image: "img/Ayla_opta_por_evitar.png",
			story: "<h3>Ayla parou na encruzilhada que levava à vila. Poderia entrar furtivamente e buscar informações entre os aldeões, mas algo dentro dela lhe dizia que o verdadeiro caminho não estava entre as casas de pedra e as ruas de paralelepípedos. Não, seu destino era mais sombrio, mais solitário.</h3> <h3>Puxando o capuz sobre os cabelos, ela virou-se para o bosque. A trilha diante dela era estreita e sinuosa, engolida pelas sombras das árvores retorcidas que pareciam sussurrar segredos antigos ao vento. O ar carregava umidade e um cheiro terroso de musgo e folhas úmidas. Cada passo ecoava entre as raízes, e a quietude do ambiente fez um arrepio percorrer sua espinha.</h3> <h3>Ela conhecia bem os perigos das florestas esquecidas. Eram lugares de mistérios, onde o tempo se dobrava e os perdidos jamais encontravam o caminho de volta. Mas Ayla não hesitou. Com cada passo, sua determinação crescia, e sua magia pulsava sob a pele, guiando-a como um farol invisível.</h3> <h3>Após horas de caminhada, a vegetação começou a se abrir, revelando uma clareira banhada pela luz prateada da lua. No centro, um círculo de pedras antigas se erguia como sentinelas silenciosas de um tempo esquecido. Musgo cobria as superfícies rugosas, e inscrições antigas estavam entalhadas em sua base.</h3>",
			choices: [
				{
					choice: "EVOCAR GUARDIÕES DA VIELA DE RODA",
					destination: "evocarGuardioes"
				},
				{
					choice: "DECIFRAR LOCAL SEM USAR MAGIA",
					destination: "decifrarLocalSemUsarMagia"
				}
			]
		},


		evocarGuardioes: {
			title: "EVOCAR GUARDIÕES DA VIELA DE RODA",
			image: "img/Ayla_decide_realizar_um_feitiço.png",
			story: "<h3>O vento cortante varria a clareira, agitando as folhas secas ao redor das pedras antigas. Ayla sabia que o círculo de pedras escondia segredos que poderiam guiá-la à Viela de Roda, mas não seria fácil arrancá-los do tempo. Inspirando fundo, ela se ajoelhou no centro da formação e fechou os olhos, sentindo o pulsar da magia sob a terra.</h3> <h3>Com movimentos cuidadosos, desenhou símbolos arcanos na terra úmida, traçando um padrão complexo que brilhava em tons azulados sob a luz da lua. Seus lábios murmuravam palavras esquecidas, um feitiço de invocação destinado a atrair espíritos guardiões. Se houvesse conhecimento perdido naquele lugar, eles o trariam.</h3> <h3>A princípio, o bosque permaneceu em silêncio absoluto. Mas então, um frio cortante tomou conta do ar, e a clareira pareceu se fechar ao redor de Ayla. Sussurros emergiram das sombras, línguas antigas se entrelaçando como um canto fúnebre. Aos poucos, figuras translúcidas tomaram forma diante dela. Espíritos de tempos imemoriais, seus olhos vazios brilhando com um brilho etéreo.</h3> <h3>— Quem ousa nos chamar? — suas vozes ecoaram em uníssono, carregadas de julgamento.</h3> <h3>Ayla manteve-se firme, erguendo o queixo.</h3> <h3>— Sou Ayla, da linhagem que nasceu da Viela de Roda. Exijo saber sua localização.</h3> <h3>Os espíritos se entreolharam, e uma gargalhada áspera cortou o silêncio.</h3> <h3>— Exigir? Não és digna de tal conhecimento. Prove sua força… ou pague com sua alma.</h3> <h3>Antes que Ayla pudesse reagir, os espíritos avançaram. Correntes de energia sombria serpenteavam pelo ar, atacando-a como chicotes espectrais. Ayla ergueu as mãos, conjurando um escudo de luz para bloquear o impacto, mas cada golpe drenava sua força.</h3> <h3>Ela sabia que não podia recuar. Com um grito, canalizou sua magia através da melodia de um cântico antigo, um feitiço de controle que tentaria dobrar a vontade dos espíritos. A clareira iluminou-se em tons dourados e azulados, enquanto a batalha se intensificava. Os espíritos rugiram, resistindo, mas Ayla era astuta—e implacável. Com um último surto de energia, desfez as sombras e os forçou a ceder.</h3> <h3>Os espíritos hesitaram, então se curvaram em resignação.</h3> <h3>— Venceste, jovem feiticeira. Que a verdade não seja tua ruína.</h3> <h3>O mais velho deles ergueu uma mão e apontou para Ayla. Imagens inundaram sua mente: um mausoléu esquecido, selado por runas antigas. Uma cripta escondida nas profundezas do território de sua família. Era ali que a Viela de Roda descansava.</h3>",
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

		decifrarLocalSemUsarMagia: {
			title: "DECIFRAR LOCAL SEM USAR MAGIA",
			image: "img/Ayla_decide_observar_os_frequen.png",
			story: "<h3>Ayla ajoelhou-se diante das pedras antigas, os dedos deslizando cuidadosamente sobre as inscrições cobertas pelo tempo. O vento soprou entre as árvores, carregando consigo um sussurro quase imperceptível, como se o próprio bosque lhe observasse. Inspirando fundo, ela decidiu que não usaria magia. Qualquer perturbação no fluxo natural da energia poderia atrair presenças indesejadas, e Ayla não podia se dar ao luxo de chamar atenção.</h3> <h3>Ela estreitou os olhos, analisando os símbolos e conectando-os às antigas histórias que ouvira ao longo de sua jornada. Pouco a pouco, as palavras começaram a fazer sentido. As inscrições falavam sobre a Viela de Roda, descrevendo-a não apenas como um instrumento, mas como um objeto de poder selado por encantamentos ancestrais. Para encontrá-la, seria necessário recuperar uma chave sagrada, oculta em uma vila próxima.</h3> <h3>Um suspiro escapou dos lábios de Ayla. Evitar o contato humano parecia ter sido a decisão mais segura, mas agora ela percebia que essa escolha poderia ter custado tempo precioso. Se tivesse se infiltrado na vila anterior, talvez já tivesse informações sobre essa chave.</h3> <h3>Ainda assim, tudo não estava perdido. E Ayla consegue a chave para a cripta.</h3>",
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
			image: "img/Ayla_se_aproxima_do_bardo.png",
			story: "<h3>Ayla sabia que este momento era crucial. Com a magia pulsando em suas veias, ela se aproximou do bardo com passos suaves, como uma sombra, e sentou-se discretamente ao seu lado. O som de sua canção ainda preenchia o ar, mas Ayla estava focada em algo mais.</h3> <h3>Ela lançou um feitiço sutil, envolvendo sua mente e a do bardo em uma teia de encantamento. Seus olhos brilharam de poder enquanto manipulava suas memórias, suavemente distorcendo a realidade para que ele a visse apenas como uma amiga e confidente. No fundo da mente do bardo, um desejo irresistível de revelar a verdade surgia, sem que ele percebesse a verdadeira fonte dessa urgência.</h3> <h3>'Fale-me sobre a Viela de Roda', ela murmurou, sua voz quase imperceptível. O bardo, agora completamente sob seu controle, olhou para ela com um olhar distante, como se estivesse sendo puxado por uma força invisível.</h3> <h3>‘A Viela...', ele começou, com a voz trêmula, 'ela está escondida... em uma cripta antiga... nas profundezas do bosque sagrado... apenas os mais sábios conhecem o caminho.’</h3> <h3>Ayla sorriu por dentro, sentindo o calor da vitória. A informação estava exatamente onde ela queria. Mas, enquanto ele falava, ela sentiu algo estranho no ar. A atmosfera na taverna parecia mudar.</h3> <h3>Os aldeões, que até então estavam distraídos com o som da música e a conversa, começaram a lançar olhares suspeitos em sua direção. O encanto que Ayla havia lançado sobre o bardo era forte, mas não era perfeito. Havia algo na forma como ele olhava para os outros, algo que começava a levantar dúvidas. A tensão na sala se intensificava.</h3> <h3>Ayla não podia mais hesitar. Com um último olhar para a porta da taverna, ela sabia que sua única chance era fugir agora, antes que fosse cercada. Ela usou sua magia para criar uma ilusão em torno de si mesma, fazendo com que parecesse desaparecer na multidão, mas os olhares acusadores já estavam se fixando nela.</h3> <h3>Ela correu pelas ruas escuras, ouvindo os gritos de 'bruxa! e 'fraude!' ecoando atrás de si. Seus pés batiam com força no chão, e o som dos aldeões vindo em sua direção se aproximava rapidamente. Ayla sabia que, por enquanto, a única opção era escapar. Ela deixou para trás pistas sutis de sua presença — uma flor caída, uma pequena marca em uma parede, pequenas evidências de que a perseguição logo seguiria.</h3> <h3>Mas ela estava determinada. A Viela de Roda estava mais próxima, e ela não permitiria que nada a impedisse de alcançá-la e Ayla consegue chegar a cripta onde a viela está guardada e se depara com uma escolha final</h3>",
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
			image: "img/Ayla_decide_observar_os_frequen.png",
			story: "<h3>Ayla decidiu que, para não arriscar ser descoberta, o melhor seria observar com cautela os frequentadores da taverna e esperar por um momento oportuno. Sua magia a fazia invisível, mas o ambiente ainda era carregado de risco. Qualquer erro poderia colocar tudo a perder.</h3> <h3>Foi quando seus olhos caíram sobre um homem de aparência distinta. Ele estava sentado à mesa mais próxima ao balcão, sua postura ereta e o olhar atento, sem se deixar levar pela música ou pelas risadas. O homem usava uma túnica de um tecido mais fino e ostentava um símbolo religioso em seu pescoço. Ayla percebeu imediatamente que ele era alguém importante — um líder.</h3> <h3>O sacerdote. Ela concentrou sua atenção, observando-o cuidadosamente enquanto ele interagia com os outros aldeões. Aos poucos, os murmúrios e fragmentos de conversas começaram a fazer sentido. O sacerdote não só era o líder espiritual da vila, mas também o guardião da chave para a cripta onde o lendário instrumento, a Viela de Roda, estava escondido.</h3> <h3>Ayla sentiu uma onda de determinação. A chave estava ao alcance, mas para obtê-la, ela teria que ser astuta.</h3> <h3>Depois de muito custo Ayla consegue a chave da cripta sem ser notada, chegando lá ela se depara com uma escolha final.</h3>",
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
			image: "img/ayla_destrói_a_Viela_imediatamente.png",
			story: "<h3>O ar ao redor de Ayla crepitava com energia enquanto ela erguia as mãos sobre a Viela de Roda, o instrumento ancestral que havia condenado sua existência. A madeira antiga pulsava, como se a magia de gerações tentasse resistir ao destino que ela escolhera. Seu coração batia forte, mas sua decisão já estava tomada.</h3> <h3>Com um último feitiço, Ayla invocou uma explosão de luz e chamas, envolvendo a Viela em um fogo etéreo. O som que ecoou foi algo além do físico—não era apenas madeira quebrando, mas um vínculo mágico se desfazendo, um eco ancestral sendo silenciado para sempre.</h3> <h3>Ela sentiu a magia ser arrancada de suas veias. A energia que por tanto tempo a sustentou se esvaía como areia entre os dedos. Ayla caiu de joelhos, ofegante, sentindo-se simultaneamente vazia e livre. Pela primeira vez, ela não era um nome preso a um legado, não era a falha de uma linhagem ou uma ameaça a ser temida.</h3> <h3>Longe dali, sua família sentiu o impacto. Feiticeiros e anciões que se vangloriavam de seus dons perceberam, em um instante de terror, o quão fraco estavam e que seu poder desaparecera para sempre. Não importava quão distantes estivessem—o laço que os ligava à Viela de Roda havia sido cortado, e agora eram apenas humanos comuns.</h3> <h3>Ayla, por outro lado, ainda tinha algo. O Elixir da Vida que ela preparara sustentava sua força física, tornando-a mais resistente e mais sábia do que antes. Mesmo sem magia, ainda era uma mulher renascida, moldada pela dor e pela vingança, mas livre para finalmente escrever seu próprio destino.</h3> <h3>Sem olhar para trás, Ayla seguiu adiante, deixando as cinzas do passado se perderem ao vento.</h3> ",
			choices: [
				{
					choice: "FIM",
					destination: "instrucoes"
				}
			]
		},

		tocarVielaRoda: {
			title: "TOCAR A VIELA DE RODA ANTES DE DESTRUÍ-LA",
			image: "img/Ayla_decide_tocar_a_Viela_antes_de.png",
			story: "<h3>Ayla envolveu a Viela de Roda com as mãos trêmulas, sentindo a madeira fria pulsar como se estivesse viva. O instrumento parecia sussurrar, suas cordas vibrando com um convite irresistível. Ela hesitou por um momento. Destruí-lo significava o fim do legado de sua família. Tocá-lo, por outro lado, poderia torná-la mais forte do que jamais sonhou ser.</h3> <h3>Inspirando fundo, Ayla passou os dedos sobre as cordas e, com um movimento preciso, arrancou a primeira nota. O som ecoou pelo salão abandonado, e, num instante, a realidade se distorceu ao seu redor. A música não era apenas melodia—era um feitiço poderoso, um redemoinho de magia ancestral que a envolveu como um abraço sufocante.</h3> <h3>Seus olhos se arregalaram quando sentiu a energia invadir seu corpo. Cada acorde pulsava dentro dela, expandindo seu ser além dos limites humanos. Ela estava se tornando algo maior, algo inominável. O poder fluiu por suas veias como um rio furioso, preenchendo cada parte de sua alma com uma fome insaciável.</h3> <h3>Mas havia um preço.</h3> <h3>O êxtase deu lugar ao desespero quando Ayla percebeu que não conseguia parar. Seu corpo queimava por dentro, sua pele cintilava em sombras dançantes, e sua mente se fragmentava. Ela não era mais Ayla.</h3> <h3>A Viela de Roda havia vencido.</h3> <h3>Agora, ela era apenas um eco da própria ambição, uma sombra faminta, eternamente presa ao ciclo de poder que jurara destruir.</h3> <h3>E a Viela, intacta e resplandecente, aguardava pacientemente pelo próximo tolo que ousasse tocá-la.</h3> ",
			choices: [
				{
					choice: "FIM",
					destination: "instrucoes"
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
			story: "<h3>Esta aventura-solo foi o trabalho final da disciplina de Introdução à Hipermídia, no semestre 2024/02. A disciplina pertence ao curso de Imagem e Som da UFSCar.</h3> <h3><b>Autor:</b> Eloá de Lima Camilo <h3><b>Programação:</b> Eloá de Lima Camilo e Leonardo Antônio de Andrade</h3><h3><b>Trilha Sonora: <a href='https://www.jamendo.com/track/1273567/espionage' target='blank' class='classe1'>Trecho da Faixa Espionage, de FOX & MEW</a></b></h3> <h3> <b>Agradecimentos: Rafael de Lima Camilo </b> </h3></h3>",
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
	<h3>${story[story.currentScene].story}</h3>
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
