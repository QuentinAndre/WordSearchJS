var grid1 = [
    ['A', 'I', 'V', 'T', 'A', 'L', 'N', 'I', 'E', 'T', 'S', 'N', 'E', 'T', 'H', 'C', 'E', 'I', 'L'],
    ['G', 'N', 'E', 'T', 'H', 'E', 'R', 'L', 'A', 'N', 'D', 'S', 'N', 'P', 'V', 'A', 'A', 'P', 'D'],
    ['R', 'O', 'M', 'A', 'N', 'I', 'A', 'T', 'V', 'I', 'S', 'R', 'O', 'I', 'I', 'I', 'O', 'C', 'B'],
    ['U', 'T', 'E', 'J', 'V', 'I', 'E', 'T', 'Y', 'C', 'N', 'L', 'E', 'R', 'A', 'R', 'I', 'D', 'I'],
    ['O', 'V', 'P', 'M', 'J', 'J', 'S', 'C', 'O', 'B', 'A', 'A', 'T', 'C', 'T', 'P', 'N', 'E', 'G'],
    ['B', 'E', 'C', 'I', 'V', 'E', 'S', 'T', 'N', 'N', 'T', 'S', 'U', 'U', 'E', 'A', 'S', 'V', 'Y'],
    ['M', 'A', 'E', 'I', 'K', 'A', 'L', 'L', 'D', 'A', 'U', 'W', 'G', 'H', 'L', 'E', 'X', 'C', 'A'],
    ['E', 'G', 'J', 'N', 'L', 'A', 'T', 'V', 'O', 'A', 'R', 'A', 'B', 'R', 'T', 'B', 'R', 'Z', 'W'],
    ['X', 'E', 'J', 'W', 'N', 'B', 'S', 'L', 'E', 'V', 'L', 'F', 'E', 'N', 'U', 'I', 'V', 'G', 'R'],
    ['U', 'Y', 'P', 'D', 'I', 'V', 'U', 'S', 'A', 'E', 'A', 'Z', 'L', 'L', 'R', 'L', 'L', 'S', 'O'],
    ['L', 'R', 'R', 'M', 'A', 'C', 'T', 'P', 'N', 'M', 'T', 'K', 'G', 'T', 'N', 'V', 'P', 'N', 'N'],
    ['I', 'A', 'A', 'N', 'A', 'O', 'E', 'I', 'E', 'I', 'Y', 'A', 'I', 'J', 'N', 'S', 'K', 'D', 'J'],
    ['L', 'G', 'N', 'I', 'N', 'C', 'A', 'L', 'W', 'R', 'R', 'H', 'U', 'A', 'E', 'D', 'R', 'N', 'D'],
    ['I', 'N', 'I', 'I', 'T', 'R', 'E', 'S', 'A', 'I', 'H', 'V', 'M', 'L', 'J', 'N', 'A', 'A', 'J'],
    ['N', 'U', 'A', 'V', 'K', 'A', 'A', 'D', 'A', 'N', 'P', 'C', 'A', 'O', 'V', 'A', 'M', 'L', 'Y'],
    ['U', 'H', 'Z', 'U', 'V', 'J', 'O', 'G', 'O', 'R', 'D', 'W', 'E', 'V', 'J', 'L', 'N', 'G', 'L'],
    ['N', 'E', 'D', 'E', 'W', 'S', 'B', 'R', 'N', 'N', 'U', 'V', 'J', 'Z', 'T', 'E', 'E', 'N', 'A'],
    ['D', 'S', 'U', 'R', 'A', 'L', 'E', 'B', 'C', 'T', 'I', 'I', 'G', 'I', 'C', 'R', 'D', 'E', 'T'],
    ['D', 'N', 'A', 'L', 'N', 'I', 'F', 'G', 'E', 'R', 'M', 'A', 'N', 'Y', 'W', 'I', 'M', 'E', 'I']];

var words1 = ['AUSTRIA', 'BELARUS', 'BELGIUM', 'BULGARIA', 'CROATIA', 'CZECHREPUBLIC', 'DENMARK', 'ENGLAND', 'ESTONIA',
    'FINLAND', 'FRANCE', 'GERMANY', 'GREECE', 'HUNGARY', 'ICELAND', 'IRELAND', 'ITALY', 'LATVIA', 'LIECHTENSTEIN',
    'LITHUANIA', 'LUXEMBOURG', 'MACEDONIA', 'MALTA', 'NETHERLANDS', 'NORWAY', 'POLAND', 'PORTUGAL', 'ROMANIA',
    'SCOTLAND', 'SLOVAKIA', 'SPAIN', 'SWEDEN', 'SWITZERLAND', 'UKRAINE', 'WALES'];

var grid2 = [
    ['K', 'P', 'E', 'N', 'C', 'I', 'L', 'C', 'A', 'D', 'N', 'E', 'G ', 'A', 'H', 'L', 'B'],
    ['Y', 'I', 'L', 'E', 'T', 'T', 'E', 'R', 'S', 'L', 'B', 'M', 'E', 'M', 'O', 'Y', 'T'],
    ['E', 'J', 'S', 'J', 'L', 'K', 'I', 'C', 'R', 'P', 'B', 'C', 'C', 'J', 'X', 'R', 'D'],
    ['C', 'E', 'G', 'V', 'Y', 'F', 'Q', 'X', 'H', 'L', 'M', 'M', 'O', 'K', 'E', 'A', 'M'],
    ['U', 'T', 'N', 'E', 'M', 'U', 'C', 'O', 'D', 'A', 'I', 'A', 'V', 'G', 'M', 'N', 'W'],
    ['D', 'M', 'R', 'N', 'T', 'J', 'P', 'R', 'L', 'R', 'I', 'A', 'T', 'K', 'S', 'O', 'T'],
    ['I', 'W', 'P', 'E', 'X', 'G', 'A', 'E', 'E', 'W', 'M', 'R', 'M', 'S', 'T', 'I', 'S'],
    ['A', 'Z', 'W', 'H', 'P', 'D', 'C', 'T', 'N', 'I', 'E', 'G ', 'A', 'E', 'A', 'T', 'T'],
    ['R', 'R', 'U', 'J', 'N', 'A', 'U', 'F', 'R', 'S', 'T', 'E', 'P', 'D', 'P', 'C', 'A'],
    ['Y', 'I', 'D', 'E', 'E', 'P', 'P', 'L', 'P', 'R', 'O', 'D', 'P', 'T', 'L', 'I', 'T'],
    ['T', 'R', 'L', 'N', 'M', 'P', 'O', 'G', 'U', 'B', 'N', 'N', 'O', 'R', 'E', 'D', 'I'],
    ['X', 'A', 'O', 'O', 'L', 'F', 'N', 'L', 'L', 'H', 'R', 'A', 'I', 'A', 'R', 'E', 'O'],
    ['C', 'H', 'C', 'V', 'F', 'I', 'E', 'O', 'C', 'X', 'R', 'H', 'N', 'V', 'D', 'T', 'N'],
    ['P', 'T', 'S', 'I', 'T', 'R', 'T', 'X', 'S', 'R', 'O', 'T', 'T', 'E', 'L', 'R', 'E'],
    ['B', 'A', 'C', 'E', 'G', 'T', 'E', 'T', 'R', 'V', 'I', 'R', 'M', 'L', 'R', 'O', 'R'],
    ['K', 'E', 'E', 'O', 'E', 'L', 'X', 'I', 'D', 'H', 'G', 'O', 'E', 'S', 'O', 'P', 'Y'],
    ['Y', 'M', 'X', 'R', 'A', 'F', 'X', 'B', 'O', 'S', 'S', 'H', 'N', 'X', 'Z', 'E', 'C'],
    ['L', 'X', 'C', 'A', 'V', 'H', 'U', 'A', 'E', 'R', 'I', 'S', 'T', 'B', 'T', 'R', 'X'],
    ['G', 'A', 'H', 'J', 'F', 'T', 'O', 'G', 'U', 'N', 'I', 'G ', 'N', 'I', 'L', 'I', 'F']
];

var words2 = ['AGENDA', 'APPOINTMENT', 'BLOTTER', 'BOSS', 'CALENDAR', 'CHAIR', 'COMPUTER', 'DESK', 'DIARY',
    'DICTIONARY', 'DOCUMENT', 'FAX', 'FILING', 'LETTER', 'MAIL', 'MEETING', 'MEMO', 'NOTE', 'OFFICE', 'PAPER',
    'PENCIL', 'PENS', 'PHONE', 'REPORT', 'RULER', 'SHORTHAND', 'STAMPS', 'STATIONERY', 'STAPLER', 'TRAVEL', 'XEROX'];

var grid3 = [
    ['V', 'H', 'W', 'X', 'S', 'C', 'E', 'P', 'T', 'E', 'R', 'C', 'R', 'S', 'P', 'S', 'J', 'T'],
    ['S', 'T', 'T', 'T', 'N', 'X', 'D', 'Y', 'D', 'X', 'L', 'M', 'W', 'K', 'A', 'O', 'B', 'C'],
    ['G', 'N', 'A', 'R', 'C', 'W', 'O', 'E', 'A', 'Y', 'T', 'R', 'S', 'V', 'L', 'V', 'G', 'J'],
    ['C', 'T', 'O', 'D', 'O', 'P', 'O', 'F', 'S', 'N', 'N', 'R', 'A', 'H', 'A', 'E', 'G', 'P'],
    ['E', 'O', 'B', 'M', 'R', 'S', 'D', 'R', 'E', 'C', 'O', 'A', 'O', 'E', 'C', 'R', 'I', 'A'],
    ['R', 'I', 'L', 'I', 'M', 'F', 'N', 'M', 'C', 'N', 'E', 'U', 'S', 'K', 'E', 'E', 'P', 'A'],
    ['J', 'E', 'N', 'O', 'A', 'O', 'N', 'O', 'O', 'M', 'S', 'N', 'I', 'T', 'K', 'I', 'U', 'H'],
    ['H', 'C', 'T', 'M', 'N', 'R', 'C', 'H', 'C', 'E', 'O', 'N', 'T', 'N', 'Y', 'G', 'W', 'L'],
    ['E', 'T', 'I', 'R', 'E', 'Y', 'H', 'O', 'H', 'M', 'G', 'T', 'I', 'D', 'H', 'N', 'L', 'N'],
    ['H', 'L', 'R', 'V', 'A', 'E', 'T', 'O', 'L', 'D', 'L', 'G', 'S', 'L', 'U', 'I', 'K', 'J'],
    ['Y', 'T', 'O', 'I', 'A', 'H', 'L', 'I', 'O', 'O', 'H', 'A', 'A', 'U', 'N', 'K', 'V', 'F'],
    ['W', 'G', 'L', 'D', 'B', 'D', 'C', 'M', 'I', 'T', 'R', 'W', 'E', 'E', 'C', 'X', 'E', 'W'],
    ['L', 'A', 'Y', 'O', 'R', 'B', 'T', 'U', 'K', 'D', 'J', 'D', 'B', 'R', 'T', 'K', 'R', 'A'],
    ['S', 'E', 'A', 'L', 'M', 'U', 'C', 'T', 'W', 'I', 'N', 'D', 'S', 'O', 'R', 'C', 'U', 'C'],
    ['Z', 'N', 'E', 'T', 'N', 'E', 'M', 'A', 'I', 'L', 'R', 'A', 'P', 'Z', 'M', 'I', 'L', 'B'],
    ['Z', 'T', 'H', 'R', 'O', 'N', 'E', 'B', 'P', 'A', 'T', 'R', 'O', 'N', 'A', 'G', 'E', 'W'],
    ['V', 'P', 'K', 'M', 'V', 'G', 'F', 'T', 'R', 'A', 'D', 'I', 'T', 'I', 'O', 'N', 'R', 'Q'],
    ['O', 'Z', 'A', 'C', 'G', 'R', 'N', 'T', 'A', 'O', 'Y', 'D', 'L', 'G', 'X', 'C', 'M', 'C']
];

var words3 = [
    'throne',
    'palace',
    'tradition',
    'family',
    'descent',
    'royal',
    'kingdom',
    'prince',
    'law',
    'earl',
    'government',
    'charter',
    'sovereign',
    'orb',
    'commons'
];