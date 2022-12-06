# Dimensional Dominions Regras (PT-BR)

## Introdução

Este é o manual de regras do jogo Dimensional Dominions contendo informações para serem utilizadas na revisão do jogo _v0.5-Alpha_. Toda e qualquer dúvida que não for sanada ou correção referente a este manual pode ser dirigida diretamente neste
[link](https://github.com/dreamblader/dominion-simulator/issues/new?labels=documentation&title=Duvidas/Correções+Regras+PT-BR&assignees=dreamblader)
onde deve ser colocado na parte dos comentários a descrição em detalhes da duvida e/ou correção.

**Este manual pode sofrer alterações durante os periodos de teste Alpha e Beta.**

## Versionamento

- Revisão 1 - Manual Foi Criado (06/06/2022) e Finalizado (24/10/2022)
- Revisão 2 - Cartas Artefato do Tipo ATTACH podem ser colocadas viradas para baixo (01/11/2022)

## Indice

1. [Setup](#setup)
2. [Layout do Jogo](#layout-do-jogo)
3. [Baralho](#baralho)
4. [Cartas](#cartas)
   - [Informações em Comum](#informações-em-comum)
     - [Cartas Unicas](#cartas-unicas)
     - [Subtipos (TAGs)](#subtipos-tags)
   - [Cartas Unidade](#unidade)
     - [Elementos](#elementos)
     - [Informações de Combate](#informações-de-combate)
   - [Cartas Artefato](#artefato)
     - [Tipos de Ativação](#tipos-de-ativação)
       - [Ativação Instantânea (INSTANT)](#ativação-instantânea-instant)
       - [Ativação Unica (ONCE)](#ativação-unica-once)
       - [Ativação Uma Vez Por Turno (ONCE PER TURN)](#ativação-uma-vez-por-turno-once-per-turn)
       - [Ativação Passiva (FOREVER)](#ativação-passiva-forever)
       - [Ativação em Anexo (ATTACH)](#ativação-em-anexo-attach)
       - [Ativação Armadilha (TRAP)](#ativação-armadilha-trap)
   - [Cartas Campo](#campo)
     - [Efeito de Ocupação (OCCUPY)](#efeito-de-ocupação-occupy)
     - [Efeito Adjacente (LINK)](#efeito-adjacente-link)
   - [Cartas Token](#token)
5. [Tipos de Efeitos](#tipos-de-efeitos)
   - [Condição Explicita](#condição-explicita)
   - [Condição Implicita](#condição-implicita)
   - [Efeito de Ação (ACTION)](#efeito-de-ação-action)
   - [Efeito de Reação (REACTION)](#efeito-de-reação-reaction)
   - [Cadeia de Evento](#cadeia-de-evento)
6. [Zona de Descarte (DZ)](#zona-de-descarte-dz)
7. [Cartas Fora do Jogo (OOG)](#cartas-fora-do-jogo-oog)
8. [Tabuleiro](#tabuleiro)
9. [Objetivo](#objetivo)
10. [Fases](#fases)
    - [Reciclagem (RECYCLE)](#reciclagem-recycle)
    - [Pesca (DRAW)](#pesca-draw)
    - [TICK](#tick)
    - [Movimentação (MOVE)](#movimentação-move)
    - [Combate (BATTLE)](#combate-battle)
    - [Invocação (SPAWN)](#invocação-spawn)
11. [Resumo (TL;DR)](#resumo-tldr)

## Setup

- O jogo consiste em dois jogadores (1x1) com a presença de um tabuleiro.
- Cada jogador deve possuir um deck de 30 cartas que será utilizado durante a partida.
- O jogo começa com cada jogador com 10 pontos de vida em seu Dominio
- Deve-se jogar uma moeda e cada jogador escolher uma face. O campeão então pode escolher entre ser o primeiro ou o segundo a jogar **(Ainda não implementado no jogo)**.

## Layout do Jogo

![Game Screen Numbered](../rules/assets/your_screen_numbered.png "Tela do Jogo")
O jogo é dividido nas seguintes seções de acordo com a imagem acima:

1. Seu [Baralho](#baralho).
2. Sua [Zona de Descarte (DZ)](#zona-de-descarte-dz).
3. [Cartas foras do Jogo (Out Of the Game - OOG)](#cartas-fora-do-jogo-oog).
4. [Zona de Descarte](#zona-de-descarte-dz) de seu adversário.
5. [Baralho](#baralho) do seu adversário.
6. Cartas que estão na mão de seu adversário
7. [Tabuleiro](#tabuleiro)
8. Cartas que estão na sua mão
9. Barra de [Fases](#fases) do Turno.
10. Botão de Finalizar Turno
11. Botão de Gerar uma Carta do tipo [TOKEN](#token)
12. Botões para ativar um evento aleatório como lançar uma moeda ou jogar um dado de 6 ou 8 lados.
13. Informações mais detalhadas da ultima carta que seu mouse passou por cima.

**Todas as seções serão explicadas com mais detalhes neste documento.**

## Baralho

- Todo Baralho deve ter exatamente 30 cartas.
- Seu baralho pode conter apenas duas cartas com o mesmo nome (duplicata), com exceção de cartas ÚNICAS, marcadas com uma estrela.
- Um baralho pode conter cartas do tipo:
  - [Unidade](#unidade)
  - [Artefato](#artefato)
  - [Campo](#campo)
- Seu baralho pode conter qualquer quantidade de qualquer tipo de carta, porém é recomendado utilizar uma quantidade maior de cartas tipo unidade.

## Cartas

Em Dimensional Dominions, todas as cartas são divididas em quatro tipos distintos:

- [Unidade](#unidade)
- [Artefato](#artefato)
- [Campo](#campo)
- [Token](#token)

### **Informações em Comum**

Mesmo tendo grandes diferenças em seus papéis e estilos durante o jogo, muitas das Cartas possuem informações em comuns, como:

- Nome
- Arte
- Estrela de identificação de Carta UNICA
- Simbolo de identidade
- Espaço para descrição de seu efeito ou efeitos
- Subtipos da carta (TAGs)

#### **Cartas Unicas**

- Cartas Unicas são identificadas com um simbolo de uma estrela próximo ao seu simbolo de identidade.
- Cartas que não possuem o simbolo de estrela não são consideradas UNICAS.
- Uma carta considerada UNICA só deve ser alocada uma cópia da mesma em um baralho.

#### **Subtipos (TAGs)**

- Toda carta de qualquer tipo possui no canto inferior esquerdo de sua aba de descrição seus Subtipos (TAGs).
- Toda carta pode possuir um ou mais Subtipos.
- Cartas com mais de um subtipos tem os mesmos separados por uma barra vertical **"|"**.
  - Ex: "Ryu the Twilight Archer" possui 3 Subtipos: "ELF", "TWILIGHT" e "RANGER".
- Subtipos servem para identificação de cartas ou em condições de efeitos.
  - Ex: "Azros King of Thassalos" possui um efeito que só pode ser aplicado em cartas do Subtipo "HUMAN"
- Todo Subtipo (e [Elemento](#elementos) no caso de Cartas Unidades) é referenciado nos efeitos de cartas com todas as suas letras em maiúsculo.

### **Unidade**

Unidade são as principais cartas do jogo, são elas que se movem e travam combates pelo tabuleiro. Elas são as unicas cartas que podem dar dano diretamente no Dominio de seu inimigo.

Elas são compostas dos seguintes itens:

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/unity_example.png" alt ='Ryu The Twilight Archer Numbered' title = 'Exemplo de Carta Unidade'>

1. Nome da Unidade
2. Range Direcional da Unidade (DIRECTION RANGE)
3. Arte da Carta
4. Pontos de Ataque da Unidade (ATK)
5. Pontos de Vida da Unidade (HP)
6. Range de Distancia da Unidade (RANGE)
7. Estrela que indica que a Carta é [UNICA](#cartas-unicas)
8. Simbolo que identifica o Elemento da Unidade
9. Efeitos da Carta
10. Subtipos da Unidade ([TAGs](#subtipos-tags))

    <br clear="left"/>

#### **Elementos**

Cartas Unidade podem ser divididas nos seguintes elementos:

- Terra (EARTH)
- Agua (WATER)
- Fogo (FIRE)
- Ar (AIR)
- Gelo (ICE)
- Trovão (THUNDER)
- Vazio (VOID)

Essa identificação é feita através do simbolo de identificação na carta em conjunto com sua cor de fundo. Segue uma imagem com um exemplo de carta de cada elemento:

![Unity Elements Examples](../rules/assets/elements_example.png "Unidades e seus Elementos")

Elementos são usados como identificados das cartas Unidades em conjunto com seus Subtipos ([TAGs](#subtipos-tags))

#### **Informações de Combate**

Cartas Unidade são as unicas cartas que possuem informações para iniciar um combate. Sendo elas:

- Pontos de Ataque (ATK)
- Pontos de Vida (HP)
- Range de Distancia (RANGE)
- Range Direcional (DIRECTION RANGE)

Mais informações de como iniciar um [Combate](#combate-battle) em sua seção .

Caso um efeito de carta afete um de seus status (ou de outras cartas) o mesmo pode especificar o item especifico com sua sigla (ATK, HP ou RANGE), ou colocar todas as informações compactadas no seguinte formato: **"ATK/HP/RANGE"** ou **"ATK/HP"** (nesse caso o RANGE é considerado **ZERO**).

Cartas Unidade que não possuem o status de RANGE visivel, seu RANGE é considerado **ZERO**

### **Artefato**

Artefatos são as cartas que causam efeitos no jogo, podendo alterar o rumo da partida ou causar vantagens e ou desvantagens constantes no jogo.

Elas são compostas dos seguintes itens:

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/artifact_example.png" alt ='Divine Sword of the Chosen Card Numbered' title = 'Exemplo de Carta Artefato'>

1. Nome do Artefato
2. Arte da Carta
3. [Tipo de Ativação](#tipos-de-ativação) do Artefato
4. Estrela que indica que a Carta é [UNICA](#cartas-unicas)
5. Simbolo que identifica que a carta é um artefato
6. Efeitos da Carta
7. Subtipos do Artefato ([TAGs](#subtipos-tags))

   <br clear="left"/>

#### **Tipos de Ativação**

Toda carta Artefato possui um tipo de ativação. Cada tipo é unico e possui suas próprias regras de utilização.

Toda carta Artefato possui apenas um dos seguintes tipos de ativação:

- [Ativação Instantânea (INSTANT)](#ativação-instantânea-instant)
- [Ativação Unica (ONCE)](#ativação-unica-once)
- [Ativação Uma Vez Por Turno (ONCE PER TURN)](#ativação-uma-vez-por-turno-once-per-turn)
- [Ativação Passiva (FOREVER)](#ativação-passiva-forever)
- [Ativação em Anexo (ATTACH)](#ativação-em-anexo-attach)
- [Ativação Armadilha (TRAP)](#ativação-armadilha-trap)

##### **Ativação Instantânea (INSTANT)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/instant_activation_example.png" alt ='Duel Invitation' title = 'Exemplo de Carta Artefato do Tipo INSTANT'>

- Artefatos do tipo **INSTANT** são considerados cartas instantâneas e podem ser ativadas a QUALQUER MOMENTO DA PARTIDA desde que a condição do efeito da mesma esteja apto para ser ativado.
  - _Exemplo da Imagem: A carta "Duel Invitation" por mais que seja do tipo **INSTANT** possui tipo de efeito de AÇÃO ([ACTION](#efeito-de-ação-action)), ou seja, nesse caso a carta somente pode ser ativada durante o turno do jogador dono da mesma._
- Ao ativa um Artefato **INSTANT** o jogador deve colocar o mesmo VIRADO PARA CIMA em qualquer espaço do campo (sendo vago ou não) e declarar seu efeito.
  - O efeito sera aplicado ou ["contra-atacado"](#efeito-de-reação-reaction) com outra ativação
- Uma vez que o efeito da carta seja aplicado ou negado a carta é mandada instantaneamente para sua zona de descarte ([DZ](#zona-de-descarte-dz))
- O Jogador pode ativar qualquer quantidade de Artefatos do tipo **INSTANT** de sua mão já que sua ativação não é contabilizada como um [SPAWN](#invocação-spawn) de Artefato durante seu turno.
  - Esse é o unico tipo de artefato que burla a contagem de [SPAWN](#invocação-spawn).
  - Esse é o unico tipo de artefato que não pode se alocado com sua face virada para baixo no Tabuleiro.

<br clear="left"/>

##### **Ativação Unica (ONCE)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/once_activation_example.png" alt ='Book of Forbidden Spells' title = 'Exemplo de Carta Artefato do Tipo ONCE'>

- Artefatos do tipo **ONCE** devem ser colocados em um espaço vago (ou ocupado por um Campo [[FIELD](#campo)] ) durante o turno de [SPAWN](#invocação-spawn) virado para baixo (dormente) ou para acima (ativo).
- Artefatos do tipo **ONCE** contam como 1 [SPAWN](#invocação-spawn) de artefato.
- Uma vez dormente (virada para baixo) a carta pode ser ativada a qualquer momento da partida desde que a condição do efeito da mesma esteja apto para ser ativado.
- Uma vez que o efeito da carta seja aplicado ou negado a carta é mandada instantaneamente para sua zona de descarte ([DZ](#zona-de-descarte-dz))
- Pelo seu nome e ativação, um artefato tipo **ONCE** é uma espécie de artefato **INSTANT** que deve ser invocado corretamente e não é exceção na contagem de invocação.

<br clear="left"/>

##### **Ativação Uma Vez Por Turno (ONCE PER TURN)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/opt_activation_example.png" alt ='Mark of War' title = 'Exemplo de Carta Artefato do Tipo ONCE PER TURN'>

- Artefatos do tipo **ONCE PER TURN** devem ser colocados em um espaço vago (ou ocupado por um Campo [[FIELD](#campo)] ) durante o turno de [SPAWN](#invocação-spawn) virado para baixo (dormente) ou para acima (ativo).
- Artefatos do tipo **ONCE PER TURN** contam como 1 [SPAWN](#invocação-spawn) de artefato.
- Uma vez dormente (virada para baixo) a carta pode ser ativada a qualquer momento da partida desde que a condição do efeito da mesma esteja apto para ser ativado.
- Uma vez ativado seu efeito a carta recebe um [TICK](#tick) de Cooldown (1 turno) que somente sera retirado no turno de [TICK](#tick) do jogador dono da carta.
- Uma vez ativado o artefato permanece virado para cima no campo e pode ser reativado a qualquer momento desde que:
  - Sua condição de efeito esteja apta para ativar
  - A carta não possua nenhum [TICK](#tick) de COOLDOWN
- Artefatos **ONCE PER TURN** só saem de campo se removidos por outro efeito ou destruidos através de um combate ([BATTLE](#combate-battle))

<br clear="left"/>

##### **Ativação Passiva (FOREVER)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/forever_activation_example.png" alt ='Sealed Gate' title = 'Exemplo de Carta Artefato do Tipo FOREVER'>

- Artefatos do tipo **FOREVER** devem ser colocados em um espaço vago (ou ocupado por um Campo [[FIELD](#campo)] ) durante o turno de [SPAWN](#invocação-spawn) virado para baixo (dormente) ou para acima (ativo).
- Artefatos do tipo **FOREVER** contam como 1 [SPAWN](#invocação-spawn) de artefato.
- Uma vez dormente (virada para baixo) a carta pode ser ativada a qualquer momento da partida desde que a condição do efeito da mesma esteja apto para ser ativado.
- Uma vez ativado o efeito de um artefato do tipo **FOREVER** a carta permanece virada para cima e o efeito passa se tornar passivo no campo, ou seja, enquanto a carta permanecer no campo seu efeito é uma ocorrencia obrigatória do jogo.
- Artefatos **FOREVER** só saem de campo se removidos por outro efeito ou destruidos através de um combate ([BATTLE](#combate-battle))

<br clear="left"/>

##### **Ativação em Anexo (ATTACH)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/attach_activation_example.png" alt ='White Flag of Surrender' title = 'Exemplo de Carta Artefato do Tipo ATTACH'>

- Artefatos do tipo **ATTACH** devem ser colocados em anexo a uma outra carta durante o turno de [SPAWN](#invocação-spawn) já ativados (virado para cima) ou virado para baixo (dormente).
- Artefatos do tipo **ATTACH** contam como 1 [SPAWN](#invocação-spawn) de artefato.
- Artefatos do tipo **ATTACH** pode ser invocado em anexo a qualquer carta desde que a mesma satisfaça sua condição de efeito.
- Artefatos do tipo **ATTACH** não precisam respeitar a [regra de invocação base ou ponte](#invocação-spawn) se forem colocados virado para cima, caso o contrario devem respeita-la.
- Uma vez ativado um artefato do tipo **ATTACH** virado para baixo o mesmo deve ser anexado a uma carta imediatamente.
- Uma vez anexado o artefato se move junto com a sua carta principal (caso a mesma possa ser movida).
- Uma vez anexado o artefato é destruido junto de sua carta principal.
- O artefato permanece ativo desde sua invocação.
- Artefatos do tipo **ATTACH** só podem ser re-anexados a outra carta por efeitos externos ou do mesmo.
- Artefatos do tipo **ATTACH** não podem ser alvo de um combate. Carta inimigas só podem declarar um ataque a carta principal

<br clear="left"/>

##### **Ativação Armadilha (TRAP)**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/trap_activation_example.png" alt ='Sealed Rune' title = 'Exemplo de Carta Artefato do Tipo TRAP'>

- Artefatos do tipo **TRAP** devem ser colocados em um espaço vago (ou ocupado por um Campo [[FIELD](#campo)] ) durante o turno de [SPAWN](#invocação-spawn) **somente** virado para baixo (dormente).
- Artefatos do tipo **TRAP** contam como 1 [SPAWN](#invocação-spawn) de artefato.
- Artefatos do tipo **TRAP** só podem ser ativos (virados para cima) quando uma Unidade declarar um ataque contra o artefato dormente (virado para baixo).
- Uma vez ativo o artefato ira afetar a criatura atacante com um efeito adverso.
- Assim que o efeito for aplicado a carta deve ser removida para a Zona de Descarte ([DZ](#zona-de-descarte-dz))

<br clear="left"/>

### **Campo**

Cartas Campo são cartas que afetam os espaços fisicos do Tabuleiro com seus efeitos diferenciados.

Elas são compostas dos seguintes itens:

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/field_example.png" alt ='Royal Palace Card Numbered' title = 'Exemplo de Carta Campo'>

1. Nome do Campo
2. Arte da Carta
3. Estrela que indica que a Carta é [UNICA](#cartas-unicas)
4. Simbolo que identifica que a carta é um campo
5. Efeito de Ocupação do Campo ([OCCUPY](#efeito-de-ocupação-occupy))
6. Efeito de Carta Adjacente ao Campo ([LINK](#efeito-adjacente-link))
7. Subtipos do Campo ([TAGs](#subtipos-tags))

   <br clear="left"/>

- Cartas Campo são as unicas cartas do jogo que podem ser ocupadas fisicamente por outra carta Unidade ou Artefato naturalmente.
- Qualquer Carta que se adeque a ser Invocada (SPAWN) em um espaço ja ocupado por um Campo pode ser Invocada ocupando o mesmo, isso não é valido para outra Carta do Tipo Campo
  - 2 Campos não podem ocupar o mesmo espaço.
- Cartas Campo são consideradas NEUTRAS, ou seja, se uma carta adversário esteja próxima ao seu campo e o efeito do mesmo a beneficia por sua proximidade, ela recebe o beneficio.
- Cartas Campo possuem dois efeitos distintos chamados de Efeito de Ocupação ([OCCUPY](#efeito-de-ocupação-occupy)) e Efeito Adjacente ([LINK](#efeito-adjacente-link)).

#### **Efeito de Ocupação (OCCUPY)**

- Um efeito de ocupação ocorre somente a carta que esteja posicionada acima da Carta Campo.
- Cartas que ocupam o Campo fisicamente também são sujeitas a efeito adjacente ([LINK](#efeito-adjacente-link))

<p align="center">
<img src="../rules/assets/field_occupy_example.png" alt ='Unity on Top of Field Card' title = 'Exemplo de Carta Ocupando um Campo'>
</p>

- Cartas que ocupam um campo recebem um "F" no canto superior esquerdo de seu retrato
- Passar o mouse sobre o "F" revela o campo que a carta esta ocupando na aba de informações ([13](#layout-do-jogo))

_Exemplo da Imagem: A carta "Azros The King of Thassalos" ocupa o Campo "Royal Palace", logo ela pega o efeito de Ocupação e faz com que o Campo aplique +2/+2 para qualquer carta adjacente que seja do elemento terra (EARTH). Como ela também recebe o efeito de Link a prórpia carta recebe +2/+2 por ser do subtipo ROYAL._

#### **Efeito Adjacente (LINK)**

- Um efeito adjacente somente ocorre as cartas que estão em um dos 8 espaços adjacentes a Carta Campo.
- Esse efeito tambem se aplica a Carta que Ocupa o Campo (OCCUPY).

<p align="center">
<img src="../rules/assets/field_link_example.png" alt ='Unity Next to Field Card' title = 'Exemplo de Carta Adjacente a um Campo'>
</p>

_Exemplo da Imagem: A carta "Azros The King of Thassalos" esta adjacente ao canto superior esquerdo do Campo "Royal Palace", logo ela recebe o efeito de Link recebendo +2/+2 por ser do subtipo ROYAL. Caso outra carta do Subtipo ROYAL do Elemento terra (EARTH) ocupasse o Campo, "Azros" não ganharia +4/+4 pelo efeito de LINK, já que o mesmo especifica que o efeito em si não se acumula com o do OCCUPY._

### **Token**

<img align="left" width="40%" style="margin-right:2rem" src="../rules/assets/token_example.png" alt ='Generic Unit Token Card' title = 'Exemplo de Carta Token'>

Cartas do Tipo Token podem ser variantes dos três tipos citados:

- Unidade
- Artefato
- Campo

Cartas Token são podem ser geradas a partir de outra Carta.

Cartas que geram Tokens são chamadas de Cartas Geradoras ou Cartas Pai.

Cartas do tipo Token só podem ser geradas no Tabuleiro e não podem ser colocadas no Baralho ou na Mão do jogador. Caso algum efeito faça o Token ser movido para outro local fora do Tabuleiro (Baralho, Mão e etc) o Token é removido do Jogo.

Cartas Geradoras devem especificar o Tipo, Subtipo, Informações de Combate e qualquer outra informação da carta Token. Ex: "Army of Thassalos" especifica que vai criar uma carta do Subtipo SOLDIER com 1 de ATK e 1 de HP do Elemento Terra.

Caso a carta Geradora não especifique uma informação de seu Token é assumido que o Token herda essa informação do Pai. Ex: Um SOLDIER Token criado por "Army of Thassalos" aponta para a mesma direção (DIRECTION RANGE) que sua carta geradora.

<br clear="left"/>

## Tipos de Efeitos

Toda carta possui uma seção somente para descrição do seu efeito.

Toda descrição de efeito é formatada da seguinte maneira:

> **[CONDIÇÃO IMPLICITA:](#condição-implicita)**
>
> **[CONDIÇÃO EXPLICITA:](#condição-explicita)**
>
> **TIPO DE EFEITO [ACTION](#efeito-de-ação-action) OU [REACTION](#efeito-de-reação-reaction):**
>
> Efeito que deve ser aplicado se condição acima for satisfeita

Toda condição deve se encontrar em **negrito** e pode especificar uma condição explicita, implicita ou um conjunto de ambas.

Logo abaixo deve se encontrar o tipo de efeito. **Caso o Tipo de efeito não for especificado, é considerado que a carta possua os 2 tipos [ACTION](#efeito-de-ação-action) e [REACTION](#efeito-de-reação-reaction) de efeito**

### **Condição Explicita**

- Condição que descreve explicitamente o que deve acontecer durante a partida para o efeito poder ser aplicado
- Geralmente começa com **IF**
- _Ex: A Carta "Divine Sword of the Chosen" possui a seguinte condição explicita: **IF the attached unity is destroyed:**. Ou seja, se a unidade com esta carta anexada for destruida, o efeito abaixo desta condição deve ser aplicado._
- Efeitos de condições explicitas são considerados **OBRIGATÓRIOS** e devem ser resolvidos assim que a condição for satisfeita.

### **Condição Implicita**

- Condição que descreve uma fase do turno em que o efeito pode ser aplicado, ou o [tipo de efeito](#efeito-de-ação-action).
- Ela pode ser descrita como as fases do jogo:
  - [DRAW](#pesca-draw)
  - [TICK](#tick)
  - [MOVE](#movimentação-move)
  - [BATTLE](#combate-battle)
  - [SPAWN](#invocação-spawn)
- O efeito com uma fase do jogo descrita só pode ser ativado durante o periodo da mesma descrita pela carta.
  - Isso se aplica na fase do dono da carta ou de seu adversário, a não ser que a carta especifique o [tipo de efeito](#efeito-de-ação-action).
- Efeitos de condições implicitas são **OPCIONAIS** com exceção dos efeitos de turno [**TICK**](#tick) que devem ocorrer toda fase de [TICK](#tick) para todas as cartas **somente pertencentes ao dono do turno**.

### **Efeito de Ação (ACTION)**

O efeito de Ação (ACTION) é considerado um **tipo de efeito** que:

- Pode ser somente aplicado durante o turno do dono da carta com o efeito
- Esse tipo de efeito só pode ser aplicado para iniciar uma cadeia de eventos, ou seja, não pode ser usado como uma resposta a outro efeito.
- Uma vez usado o efeito é iniciado uma cadeia de evento.

### **Efeito de Reação (REACTION)**

O efeito de Reação (REACTION) é considerado um **tipo de efeito** que:

- Pode ser somente aplicado em resposta a uma AÇÃO como mover, batalhar, invocar ou até mesmo um efeito de tipo ACTION
- Esse tipo de efeito só pode ser aplicado durante uma cadeia de eventos.
- Uma Reação pode ser usada em resposta a uma Ação do próprio usuário desde que o adversário não tenha uma resposta disponivel.

### **Cadeia de Evento**

Toda ação de efeitos tipo [ACTION](#efeito-de-ação-action) ou ações durante o turno cria uma cadeia de evento. Uma vez criada a cadeia pode ser respondida por efeitos do tipo [REACTION](#efeito-de-reação-reaction). Essas reações podem ser respondidas com mais efeitos do tipo [REACTION](#efeito-de-reação-reaction) criando uma pilha de efeitos que só é resolvida assim que não há mais resposta dos dois lados do jogo.

Uma vez criado uma ação o adversário tem a prioridade de responder com uma reação, caso não for possivel, o próprio usuário que iniciou a ação pode responder a si mesmo.

Uma vez respondida uma ação ou reação a prioridade da próxima resposta troca para o jogador que não respondeu o ultimo evento.

Uma vez que não há respostas de ambos os jogadores, todos os eventos são resolvidos da ultima resposta até chegar na ação iniciadora da cadeia.

Uma vez que a cadeia de evento se acabou, o jogador dono do turno pode então fazer outra ação.

É considerado uma ação os seguintes gestos:

- Pescar uma ou varias Cartas
  - Efeitos de pescar multiplas cartas de uma vez é considerado UMA unica ação (isso conta com a pesca de inicio de turno ([DRAW](#pesca-draw)))
- Mover uma carta no Tabuleiro
  - Cartas que se movem mais de um espaço ainda contam como uma ação de movimento
  - Cartas que podem ser movidas 2 ou mais vezes SEPARADAMENTE no mesmo turno contam como uma nova ação toda a vez que o usuario escolha mover a carta novamente.
- Batalhar contra uma carta no Tabuleiro
  - Cartas que podem declarar Batalhas multiplas vezes, cada declaração é considerada como uma ação nova.
- Ativar um efeito do tipo [**ACTION**](#efeito-de-ação-action) ou efeito sem um tipo (que é considerado um efeito hibrido)
- Invocar uma Carta

## Zona de Descarte (DZ)

- Todas as cartas destruidas ou descartadas durante o jogo devem ser colocadas na sua Zona de Descarte (DZ).
- Todas as cartas no DZ são de conhecimento publico dos jogadores.
  - Qualquer jogador pode verificar quais e quantas cartas se encontram em seu DZ ou no DZ de seu adversário.
- Cartas que por algum efeito externo trocaram de controle para seu adversário ou vice-versa quando destruidas são alocadas no DZ de seu jogador original.

## Cartas fora do Jogo (OOG)

- Toda as cartas que por algum efeito próprio ou externo forem removidas completamente do jogo devem ser colocadas neste espaço.
- Todas as cartas alocadas no OOG são de conhecimento publico.
- Cartas no OGG possuem uma borda colorida que sinaliza seu jogador original.
  - Vermelho: Adversário
  - Azul: Sua
- Uma vez que a carta é alocada neste espaço ela esta completamente **FORA DO JOGO**. Nenhum efeito pode ou deve afeta-la, nenhum efeito pode ou deve move-la desse espaço.
  - Existe um botão para realocar a carta do OOG no DZ em caso de missclick.

## Tabuleiro

O Tabuleiro é composto da seguinte maneira:

![Board](../rules/assets/board.png "Tabuleiro do Jogo")

Dominio é o ponto principal de cada jogador, ele não deve ser preenchido com nenhuma carta e ele diz o numero de pontos de vida restantes do jogador.

Todo jogador começa no Dominio de cor azul e seu adversário no vermelho.

Fisicamente cada jogador ficaria em um lado oposto da mesa onde cada um ficaria de frente para um Far-End diferente, fazendo com que as cartas de seu adversário fiquem de cabeça para baixo em sua perspectiva. Isto é feito automaticamente na versão digital.

Por este motivo é relativo chamar um Far-End ou Main-End de Norte ou Sul, pois o Far-End Norte na sua perspectiva seria o Far-End Sul na perspectiva do jogador adversário.

## Objetivo

O jogador que reduzir a vida do Dominio de seu adverário a **ZERO** é considerado o vencedor.

O jogador pode declarar um ataque contra o Dominio de seu adversário se:

- Possuir uma carta do tipo unidade nas zonas adjacentes do Dominio de seu adversário (zonas coloridas).
- Cartas unidades com ataque a distancia não podem atacar o dominio a distancia, elas tambem devem respeitar a regra acima.
- Cartas unidades que se encontra na zona adjacente podem atacar o Dominio mesmo que seu campo direcional não aponte para a localização fisica do Dominio.

Uma vez declarado o ataque os pontos de vida do Dominio serão reduzidos pelo tanto de ataque da carta que o declarou.

Se o jogador estiver sem recursos para continuar o jogo (sem cartas no tabuleiro, sem cartas no baralho, sem cartas na mão) ele é declarado derrotado automaticamente.

Caso o jogo entre num empasse em que ambos os jogadores não conseguem sair do estado atual (cartas não conseguem se mover, atacar e ser invocadas no tabuleiro). O jogo é considerado um **EMPATE**.

## Fases

O jogo é dividido em 6 fases. Sendo 5 fases recorrentes durante toda a partida e uma que só ocorre concorrentemente no primeiro turno do jogo.

Toda vez que o jogador termina seu turno seu adversário deve percorrer as mesmas fases até o final do seu turno.

As fases **DEVEM SER PERCORRIDAS EM ORDEM**. Se um usuário decidir batalhar com uma de suas cartas ele não pode mais mover outras cartas que não foram movidas neste turno, pois ele pulou essa fase quando decidiu declarar um ataque.

As fases em um turno são corridas na seguinte ordem:

0. RECYCLE
1. DRAW
2. TICK
3. MOVE
4. BATTLE
5. SPAWN

### **Reciclagem (RECYCLE)**

- **Esta fase somente ocorre no primeiro turno do primeiro jogador**
- Ela ocorre concorrentemente entre os dois jogadores
- Ambos jogadores pescam até ter 4 cartas em mãos
- Os dois jogadores então selecionam de 0 a 4 cartas de suas mãos para serem descartadas para o [DZ](#zona-de-descarte-dz).
- Quando os dois jogadores confirmarem o fim desta fase o jogo inicia normalmente **PULANDO** a fase de [DRAW](#pesca-draw) do primeiro jogador.
- Essa fase é uma especie de mulligan que beneficia o jogador que inicia no segundo turno da partida.

### **Pesca (Draw)**

- Esta fase ocorre inicio de cada turno, com exceção do primeiro turno do jogo (ver [RECYCLE](#reciclagem-recycle))
- Nesta fase o jogador dono do turno deve pescar até ter 4 cartas em suas mãos.
  - Se o jogador possui 4 cartas ou mais, ele não deve pescar nenhuma carta e pula esta fase
  - Se o jogador não possuir cartas suficientes em seu baralho para chegar ao limite de 4 cartas em mãos, o mesmo deve pescar todas as cartas do baralho.
  - Se não houver mais cartas para pescar, esta fase é pulada.

### **TICK**

- TICK é uma fase que ocorre obrigatoriamente para o dono do turno após a fase de DRAW. Durante a mesma todo efeito que possui um tempo limite de turnos é aplicado e seu contador diminuido por 1.
  - Por exemplo: O dono do turno possui uma carta com uma aflição de efeito de veneno (**POISON**) por 3 turnos, ou como descrito na cartas: 3 TICKS. Durante a fase de TICK a carta do mesmo recebe 1 de dano (efeito que ocorre pelo **POISON**) e os 3 TICKS do efeito caem para 2. Sendo assim, nos próximos 2 Turnos **DESTE JOGADOR** esse efeito sera aplicado e depois sera retirado da carta.
- O nome desta fase vem do som de tick de um relógio

Observações:

- Todo efeito de carta que possui uma [Condição Implicita](#condição-implicita) do tipo **TICK** é aplicado durante esta fase obrigatoriamente.
- São aplicados somente efeitos do tipo **TICK** para o **DONO DO TURNO**, ou seja, se o outro jogador possuir efeitos que são ativados durante o **TICK**, eles só serão ativados durante o turno do mesmo.
- Exitem efeitos de tipo **TICK** que não possui uma condição de turnos para serem finalizados, sendo assim, o efeito é aplicado e nenhum contador é diminuido por 1 e o efeito sera aplicado em todos os turnos da partida enquanto a carta se manter ativa no tabuleiro. Esses efeitos são chamados de **Efeitos de TICK Eternos** ou **TICK Inderteminado**.

### **Movimentação (MOVE)**

- Esta fase ocorre obrigatoriamente após todas as aplicações de efeitos do turno de TICK.
- Nesta fase o **DONO DO TURNO** pode escolher todas as cartas do tipo [unidade](#unidade) no [Tabuleiro](#tabuleiro) e mover 1 espaço para **qualquer direção** (com exceção de cartas que possuem sua direção de movimento limitadas por um efeito).
- Algumas cartas podem mover mais de 1 espaço, porém isto deve estar explicito no efeito da carta. Se não houver algum efeito que se aplique o movimento da unidade, por padrão ela se move apenas 1 espaço.
- Uma vez movida a unidade, a mesma só podera ser movida novamente na próxima fase de **MOVE** de seu próximo turno
- Todo efeito de [Condição Implicita](#condição-implicita) do tipo **MOVE** só pode ser usado durante esta fase.

### **Combate (BATTLE)**

- Esta fase ocorre obrigatoriamente após todas as unidades no campo moverem de MOVE.
- Nesta fase o **DONO DO TURNO** pode escolher todas as cartas do tipo [unidade](#unidade) no [Tabuleiro](#tabuleiro) e declarar uma ataque a outra carta adversária de qualquer tipo (até cartas viradas para baixo).
- Para poder declarar um ataque sua carta do tipo [unidade](#unidade) deve estar no alcance e na direção correta da carta alvo.
- Toda carta possui alcance (RANGE) 0. Ou seja, a mesma só pode atacar cartas adjacentes a ela.
  - Algumas unidades possuem uma especificação numeral de RANGE em seus status. Esse numéro é o alcance da carta em sua direção tomando como base que o RANGE 0 é estar adjacente a carta.
- Toda carta do tipo [unidade](#unidade) possui em volta de sua arte setas cardinais que indicam seu alcance direcional (DIRECTION RANGE). Para a mesma poder escolher um alvo, o mesmo deve estar em seu RANGE designado e ao mesmo tempo deve estar na direção onde suas setas em vermelho apontar.
  - Segue abaixo um exemplo ilustrativo de algumas cartas e quais são seus espaços corretos para declaração de um alvo de acordo com seu alcance e direção.
    ![Combat Range Examples](../rules/assets/combat_example.png "Exemplos de Tipos de Alcance")
- Uma vez a unidade ter declarado um ataque, a mesma só podera declarar outro ataque novamente na próxima fase de **BATTLE** de seu próximo turno.
- Todo efeito de [Condição Implicita](#condição-implicita) do tipo **BATTLE** só pode ser usado durante esta fase.

### **Invocação (SPAWN)**

- Esta fase ocorre obrigatoriamente após todos os combates serem finalizados na fase anterior.
- Durante a fase de SPAWN o **DONO DO TURNO** pode colocar no [tabuleiro](#tabuleiro) 1 carta de cada tipo, sendo eles:
  [Unidade](#unidade), [Artefato](#artefato) e [Campo](#campo).
  - Cartas do tipo [Token](#token) são geradas a partir de efeito de outras cartas e não contam como uma Invocação.
- O jogador deve colocar a carta a ser invocada em um espaço não ocupado por uma carta.
  - Com exceção de cartas [Campo](#campo) que podem ser ocupadas por qualquer outra carta exceto outro Campo e [Artefatos do tipo Anexo](#ativação-em-anexo-attach) que podem ser colocados em outra carta ativa do tabuleiro.
- O jogador só pode colocar cartas em sua zona de invocação (**SPAWN ZONE**) ou através de uma ponte de cartas que se conecta a sua SPAWN ZONE (este método é chamado de **BRIDGE SPAWNING**).
  - SPAWN ZONE é a area colorida referente ao jogador.
    - Neste simulador todo jogador vê o tabuleiro com a zona azul sendo sua SPAWN ZONE.
  - Exemplo : Na imagem abaixo é possível visualizar quais locais é possivel invocar uma nova carta a partir de cartas que já estão colocadas no campo.
    ![Spawn Example](../rules/assets/spawn_example.png "Exemplo de Possiveis Áreas de Invocação")
    - PS: Somente é possível fazer uma **BRIDGE SPAWN** com cartas que pertencem a você.
      Cartas do seu adversário que podem ter mudado de dono por um efeito não contam neste quesito.
    - É possivel bloquear o adversário de invocar qualquer carta se todos os espaços de sua **SPAWN ZONE** estiver ocupados por cartas não pertencentes a ele.
- Cartas com a [Condição Implicita](#condição-implicita) do tipo SPAWN tem seus efeitos ativados instantaneamente no momento que as mesmas forem invocadas.
- Algumas cartas possuem uma Condição chamada **SUPER SPAWN**, neste caso a carta só pode ser invocada por um efeito externo de outra carta.
  - SUPER SPAWN não conta como uma Invocação, logo é possível Invocar outra carta do mesmo tipo.
  - Algumas cartas possuem SUPER SPAWN e NORMAL SPAWN, logo é possivel escolher se a carta sera invocada normalmente ou por outro efeito, e o efeito da mesma ocorrera dependente do tipo de invocação usada.
    - Por exemplo: A carta "Dragon of Thassalos" pode ser invocada através de SUPER SPAWN e caso for invocada desta maneira a mesma aplica 3 de Dano e BURN (2 Ticks) para todas as cartas da fileira onde foi invocada. Caso "Dragon of Thassalos" for invocado normalmente, ele também aplica o seu efeito de SUPER SPAWN, porém ele só pode continuar no campo se em todo TICK for sacrificado uma carta do subtipo HUMAN de sua mão ou tabuleiro.
  - Cartas que possuem SUPER SPAWN mas não possuem a condição NORMAL SPAWN em sua descrição de efeito, só podem ser invocadas via SUPER SPAWN.
    - Por exemplo: A carta "Sealed Exodus Guardian" só pode ser invocada através de SUPER SPAWN utilizando o efeito Artefato "Sealed Rune". Qualquer outro método não pode alocar essa carta no tabuleiro

## **Resumo (TL;DR)**

- Resumo da partida:
  1. 2 jogadores 30 cartas cada
  2. Jogadores jogam "pedra, papel e tesoura"
  3. O jogador vencedor escolhe se vai jogar primeiro ou em segundo
  4. Os dois jogadores entra no turno de [RECYCLE](#reciclagem-recycle)
  5. O primeiro jogador só pode Invocar cartas [SPAWN](#invocação-spawn)
  6. O segundo jogador pesca ([DRAW](#pesca-draw)) caso tenha reciclado cartas. E só pode Invocar cartas [SPAWN](#invocação-spawn).
  7. O primeiro jogador inicia seu turno normalmente e segue a ordem para utilizar as cartas que invocou no turno passado. Ele segue a ordem:
  - [DRAW](#pesca-draw)
  - [TICK](#tick)
  - [MOVE](#movimentação-move)
  - [BATTLE](#combate-battle)
  - [SPAWN](#invocação-spawn)
  8. O segundo jogador inicia seu turno normalmente e segue a ordem para utilizar as cartas que invocou no turno passado. Seguindo a mesma ordem acima.
  9. O jogo se mantem repetindo os passos 7 e 8 até que um jogador declare derrota tendo seus pontos de vida zerado ou verificando que não há mais como recuperar a partida.
