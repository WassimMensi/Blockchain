# Blockchain
Blockchain = techno de base de données

impossible de modifier les données
les données sont stockées dans des blocs
les blocs sont liés entre eux
le système de base de données s'autogère
ex blockchain decentralisée (bitcoin ou ethereum)

# résume de la blockchain
la blockchain est partagée entre tous les noeuds du réseau
chaque noeud possède une copie de la blockchain et peut la consulter   
les noeuds peuvent ajouter des blocs à la blockchain
les noeuds peuvent consulter les blocs de la blockchain
il n'existe pas d'autorité unique qui contrôle la base de données

gratuit pour consulter la blockchain
payer pour ajouter des blocs à la blockchain

déployer un contrat sur sepolia
créer proj react qui utilise ethersjs pour interagir avec contrat créer

# Cours de Quentino
Une blockchain est une base de donéées distribuée et sécurisée. Elle est partagée par tous les noeuds du réseau et contient l'historique de toutes les transactions réalisées depuis sa création. Chaque noeud du réseau possède une copie de la blockchain. lorsqu'une transaction est enregistrée au sein de la blockchain, elle ne peut plus être modifiée. Il n'existe pas d'autorité unique de contrôle sur la base de données. Cette derniere est répliquée sur tous les noeuds d'un réseau peer to peer. Ce qu'on peut stocker dans une blockchain est limité par la taille des blocs et la taille des transactions, en revanche on peut stocker n'importe quel type de données (monnaies, code executable, medias...).

# Retour à mon cours
jeton fongible = jeton qui peut être divisé en plusieurs parties

ERC-20 c'est le standard pour les jetons fongibles sur la blockchain Ethereum. Il permert de créer qui peuvent être echangés, transférés et stockés de manière standardisée.

Voici les méthodes de base d'un contrat ERC-20 :
function totalSupply() public view returns (uint256);
function balanceOf(address account) public view returns (uint256);
function transfer(address recipient, uint256 amount) public returns (bool);
function allowance(address owner, address spender) public view returns (uint256);
function approve(address spender, uint256 amount) public returns (bool);
function transferFrom(address sender, address recipient, uint256 amount) public returns (bool);

Pour créer un token ERC-20 on peut utiliser OpenZeppelin. OpenZeppelin est une bibliothèque de smart contrats open-source qui permet de créer des smart contrats sécurisés et évolutifs.

