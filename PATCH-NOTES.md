# Patch Notes

## Closed Beta

## 0.4v Closed Alpha

Added:

- Game:

  - Tick Status can be applied in the "Set Status" Card Menu.
  - All Tick Status applied to the Card show in the Card Info
  - Cards with Tick Status on board show how many status the card have
  - Added Phase Bar to Control which game phase the turn player is at
  - Added "TICK" in Board Card Actions
    - The "TICK" action will run all Tick Status function inside the Card and decrease it duration by 1
  - Added RNG Control Buttons
    - Added Dice (D6)
    - Added Coin
    - Added Dice (D8)

- MISC:
  - Added CREDITS.md to inform almost SVG icons credits used in this project (need to add some card icons)

Changed:

- Game
  - Remade/fixed ATK Animation to be more precise and informative

## 0.3v Closed Alpha

Fixed:

- Fixed a Bug that the async call of shuffle after "Search" is operated in Deck effect the selected card, making it erratic
- Fixed a Bug that the "Change Status" Menu was not responsive (still needs more test)

Added:

- Game:
  - More Responsive options
  - Range Label now can fit Status-Column
- Dev:
  - Nodemon is now a development dependency

Changed:

- Status
  - Info Status Range label changed from "RANGED" to "RG" to not break responsiviness of status

## 0.2v Closed Alpha

Fixed:

- Fixed a Bug that the Range value did not show on the Board space overlay
- Fixed a Bug that card-convert was only converting the first pipe code ("|")
- Fixed the responsiveness of Info Status

Added:

- System:
  - The screen is now responsive (needs more test)
  - Token Cards feature is now added to the game system
- Token Cards:
  - Token Cards can only spawn on board.
  - Token Card Art Added
  - Token Mock added (**IMPORTANT: This value will change and the data will be retrieve via API in the future**)
  - Any action that moves the Token Card to Hand, DZ or OOG will delete the Token Card data from the game
- Control Buttons:
  - You can create a Generic Token Card 1/1 by clicking on the "CREATE TOKEN" button and selecting a Board Space

Changed:

- Status:
  - Info Status Range label changed from "R" to "RANGED"

---

## 0.1v Closed Alpha

Game is Working with the following actions:

- Deck
  - Cards can be searched from Deck
  - Cards can be drawn from Deck
  - Cards can be drawn with DRAWN FOR TURN, that drawn the exact number cards to reach the max of 4 cards in hand
  - Deck can be shuffled
  - You can mill the top card of the deck. The game will put it on the DZ
- DZ
  - You can look at both players DZ
  - You can put cards of your own DZ back to Hand, Field or OOG
- OOG
  - You can look all OOG cards (color coded to the players)
  - You can put any OOG card back to the card's owner DZ
- Hand
  - You can put cards back at the Bottom or the Top of the Deck
  - You can put cards in the DZ or the OOG
  - You can put card in the board facing-up or facing-down
- Board
  - Board is mirrored to the current player
    - Your board will be always Blue - Adversary will be always Red
    - All your cards have a normal orientation - Adversary cards will be always upside-down
  - LP space where the Player can add/subtract it's OWN LP
    - Adversary LP cannot be tempered
  - Cards in Board can Move to another Space
  - Cards in Board can select a card to Declare an Atack (not final)
  - Cards in Board can Declare it Effect Activation (not final)
  - Cards in Board can flip/unflip, hiding/showing it content to the adversary
  - Cards in Board can invert, changing it controls to the another player
  - Cards in Board can be moved to the Hand, DZ or OOG
  - Unity Cards in Board show it current status at the bottom of the space with the format: "$ATK/$HP $RANGE"
    - Range only show if it is different of zero
    - Range number show prefixed with + or - signal
  - Cards in Board can be Stacked
    - Players can see all Cards that occupy the same Space.
    - When a board space have a stack of Cards a '+' signal will show at the top-right corner
      - Clicking on the '+' will automaticatly perform the "Check All Cards" action
    - When a board space have a Field Card inside the Stack a 'F' will show at the top-left corner
      - Hovering the mouse on the 'F' will show the Field Card status at the Info Panel
  - Player can only apply above actions to its own Cards or Enemy Cards that is currently Inverted
- Control
  - Player have a END TURN button to signal the end of his turn
    - This button only appears when it is your turn
  - Player have a REACT button to signal the adversary that they going to make a move as Reaction to their Action
    - This button only appears when it is NOT your turn
- Info
  - Info pannel show a in-depth zoom to the last mouse hovered Card status
  - Info pannel do not show Enemy Cards that are flipped
  - Info pannel color code the current card status based on its original values
    - Green values = The current value is GREATER than the card original value
    - Red values = The current value is LESS than the card original value
