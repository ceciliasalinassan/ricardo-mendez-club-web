const ADMIN_PASS='admin1932';
const ADMIN_WHATSAPP='56994413797';
const DATA_KEY='clubRMV24';
const SUPABASE_CONFIG_KEY='clubRMV24SupabaseConfig';
const SUPABASE_BUCKET='club-assets';
const OFFICIAL_STANDINGS = {
  "SERIE PRIMERA ADULTOS": [
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 4,
      "pe": 0,
      "pp": 1,
      "gf": 14,
      "gc": 6,
      "dg": "+8",
      "pts": 12
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 4,
      "pe": 0,
      "pp": 1,
      "gf": 12,
      "gc": 5,
      "dg": "+7",
      "pts": 12
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 3,
      "pe": 1,
      "pp": 1,
      "gf": 15,
      "gc": 5,
      "dg": "+10",
      "pts": 10
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 9,
      "gc": 7,
      "dg": "+2",
      "pts": 9
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 1,
      "pp": 3,
      "gf": 8,
      "gc": 14,
      "dg": "-6",
      "pts": 7
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 8,
      "gc": 15,
      "dg": "-7",
      "pts": 6
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 1,
      "pe": 2,
      "pp": 3,
      "gf": 8,
      "gc": 15,
      "dg": "-7",
      "pts": 5
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 1,
      "pe": 1,
      "pp": 3,
      "gf": 6,
      "gc": 8,
      "dg": "-2",
      "pts": 4
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 0,
      "pe": 3,
      "pp": 3,
      "gf": 8,
      "gc": 13,
      "dg": "-5",
      "pts": 3
    }
  ],
  "SERIE PLATINOS": [
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 3,
      "pe": 3,
      "pp": 0,
      "gf": 8,
      "gc": 5,
      "dg": "+3",
      "pts": 12
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 3,
      "pe": 2,
      "pp": 0,
      "gf": 9,
      "gc": 6,
      "dg": "+3",
      "pts": 11
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 3,
      "pe": 2,
      "pp": 1,
      "gf": 6,
      "gc": 5,
      "dg": "+1",
      "pts": 11
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 2,
      "pe": 3,
      "pp": 1,
      "gf": 7,
      "gc": 6,
      "dg": "+1",
      "pts": 9
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 9,
      "gc": 5,
      "dg": "+4",
      "pts": 7
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 2,
      "gc": 5,
      "dg": "-3",
      "pts": 7
    },
    {
      "team": "Cruz Azul",
      "pj": 3,
      "pg": 0,
      "pe": 0,
      "pp": 3,
      "gf": 0,
      "gc": 3,
      "dg": "-3",
      "pts": 0
    },
    {
      "team": "Manzana T.",
      "pj": 3,
      "pg": 0,
      "pe": 0,
      "pp": 3,
      "gf": 0,
      "gc": 3,
      "dg": "-3",
      "pts": 0
    },
    {
      "team": "Unión",
      "pj": 3,
      "pg": 0,
      "pe": 0,
      "pp": 3,
      "gf": 0,
      "gc": 3,
      "dg": "-3",
      "pts": 0
    }
  ],
  "SERIE SEGUNDA ADULTOS": [
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 18,
      "gc": 4,
      "dg": "+14",
      "pts": 15
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 4,
      "pe": 1,
      "pp": 1,
      "gf": 12,
      "gc": 7,
      "dg": "+5",
      "pts": 13
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 3,
      "pe": 1,
      "pp": 2,
      "gf": 7,
      "gc": 5,
      "dg": "+2",
      "pts": 10
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 9,
      "gc": 5,
      "dg": "+4",
      "pts": 9
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 11,
      "gc": 11,
      "dg": "0",
      "pts": 7
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 7,
      "gc": 8,
      "dg": "-1",
      "pts": 6
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 0,
      "pp": 4,
      "gf": 8,
      "gc": 19,
      "dg": "-11",
      "pts": 6
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 1,
      "pe": 1,
      "pp": 3,
      "gf": 4,
      "gc": 10,
      "dg": "-6",
      "pts": 4
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 5,
      "gc": 12,
      "dg": "-7",
      "pts": 0
    }
  ],
  "SERIE SEGUNDA INFANTIL": [
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 4,
      "pe": 1,
      "pp": 0,
      "gf": 8,
      "gc": 2,
      "dg": "+6",
      "pts": 13
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 4,
      "pe": 1,
      "pp": 0,
      "gf": 5,
      "gc": 1,
      "dg": "+4",
      "pts": 13
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 3,
      "pe": 1,
      "pp": 2,
      "gf": 9,
      "gc": 3,
      "dg": "+6",
      "pts": 10
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 3,
      "pe": 1,
      "pp": 2,
      "gf": 9,
      "gc": 7,
      "dg": "+2",
      "pts": 10
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 2,
      "pe": 2,
      "pp": 1,
      "gf": 16,
      "gc": 9,
      "dg": "+7",
      "pts": 8
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 6,
      "gc": 9,
      "dg": "-3",
      "pts": 6
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 0,
      "pp": 4,
      "gf": 3,
      "gc": 17,
      "dg": "-14",
      "pts": 6
    },
    {
      "team": "Manzana T.",
      "pj": 4,
      "pg": 0,
      "pe": 0,
      "pp": 4,
      "gf": 1,
      "gc": 5,
      "dg": "-4",
      "pts": 0
    },
    {
      "team": "Cruz Azul",
      "pj": 4,
      "pg": 0,
      "pe": 0,
      "pp": 4,
      "gf": 0,
      "gc": 4,
      "dg": "-4",
      "pts": 0
    }
  ],
  "SERIE PEQUES": [
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 27,
      "gc": 0,
      "dg": "+27",
      "pts": 15
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 16,
      "gc": 3,
      "dg": "+13",
      "pts": 15
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 14,
      "gc": 3,
      "dg": "+11",
      "pts": 9
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 3,
      "pe": 0,
      "pp": 3,
      "gf": 9,
      "gc": 13,
      "dg": "-4",
      "pts": 9
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 5,
      "gc": 15,
      "dg": "-10",
      "pts": 9
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 8,
      "gc": 7,
      "dg": "+1",
      "pts": 6
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 0,
      "pp": 4,
      "gf": 5,
      "gc": 27,
      "dg": "-22",
      "pts": 6
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 1,
      "pe": 0,
      "pp": 5,
      "gf": 4,
      "gc": 15,
      "dg": "-11",
      "pts": 3
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 5,
      "dg": "-5",
      "pts": 0
    }
  ],
  "SERIE PRIMERA INFANTIL": [
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 6,
      "pe": 0,
      "pp": 0,
      "gf": 21,
      "gc": 2,
      "dg": "+19",
      "pts": 18
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 4,
      "pe": 1,
      "pp": 1,
      "gf": 24,
      "gc": 7,
      "dg": "+17",
      "pts": 13
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 3,
      "pe": 2,
      "pp": 0,
      "gf": 22,
      "gc": 6,
      "dg": "+16",
      "pts": 11
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 20,
      "gc": 13,
      "dg": "+7",
      "pts": 9
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 6,
      "gc": 10,
      "dg": "-4",
      "pts": 7
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 7,
      "gc": 12,
      "dg": "-5",
      "pts": 6
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 1,
      "pe": 0,
      "pp": 5,
      "gf": 12,
      "gc": 22,
      "dg": "-10",
      "pts": 3
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 1,
      "pe": 0,
      "pp": 4,
      "gf": 8,
      "gc": 21,
      "dg": "-13",
      "pts": 3
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 2,
      "gc": 29,
      "dg": "-27",
      "pts": 0
    }
  ],
  "SERIE JUVENILES": [
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 5,
      "pe": 1,
      "pp": 0,
      "gf": 25,
      "gc": 3,
      "dg": "+22",
      "pts": 16
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 18,
      "gc": 2,
      "dg": "+16",
      "pts": 15
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 4,
      "pe": 1,
      "pp": 1,
      "gf": 10,
      "gc": 6,
      "dg": "+4",
      "pts": 13
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 14,
      "gc": 8,
      "dg": "+6",
      "pts": 9
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 2,
      "pe": 2,
      "pp": 1,
      "gf": 13,
      "gc": 10,
      "dg": "+3",
      "pts": 8
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 1,
      "pe": 1,
      "pp": 4,
      "gf": 7,
      "gc": 33,
      "dg": "-26",
      "pts": 4
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 1,
      "pe": 0,
      "pp": 4,
      "gf": 6,
      "gc": 13,
      "dg": "-7",
      "pts": 3
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 0,
      "pe": 1,
      "pp": 4,
      "gf": 8,
      "gc": 21,
      "dg": "-13",
      "pts": 1
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 5,
      "dg": "-5",
      "pts": 0
    }
  ],
  "SERIE HONOR": [
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 5,
      "pe": 0,
      "pp": 1,
      "gf": 19,
      "gc": 5,
      "dg": "+14",
      "pts": 15
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 14,
      "gc": 3,
      "dg": "+11",
      "pts": 15
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 3,
      "pe": 1,
      "pp": 1,
      "gf": 9,
      "gc": 6,
      "dg": "+3",
      "pts": 10
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 3,
      "pe": 1,
      "pp": 1,
      "gf": 6,
      "gc": 5,
      "dg": "+1",
      "pts": 10
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 3,
      "pe": 0,
      "pp": 2,
      "gf": 4,
      "gc": 7,
      "dg": "-3",
      "pts": 9
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 2,
      "pp": 2,
      "gf": 8,
      "gc": 11,
      "dg": "-3",
      "pts": 8
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 1,
      "pe": 0,
      "pp": 5,
      "gf": 3,
      "gc": 15,
      "dg": "-12",
      "pts": 3
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 5,
      "dg": "-5",
      "pts": 0
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 1,
      "gc": 7,
      "dg": "-6",
      "pts": 0
    }
  ],
  "SERIE SUPER SENIOR": [
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 5,
      "pe": 0,
      "pp": 1,
      "gf": 16,
      "gc": 7,
      "dg": "+9",
      "pts": 15
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 4,
      "pe": 1,
      "pp": 0,
      "gf": 19,
      "gc": 4,
      "dg": "+15",
      "pts": 13
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 4,
      "pe": 1,
      "pp": 1,
      "gf": 16,
      "gc": 6,
      "dg": "+10",
      "pts": 13
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 4,
      "pe": 0,
      "pp": 1,
      "gf": 9,
      "gc": 4,
      "dg": "+5",
      "pts": 12
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 3,
      "pe": 1,
      "pp": 1,
      "gf": 14,
      "gc": 3,
      "dg": "+11",
      "pts": 10
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 1,
      "pe": 1,
      "pp": 4,
      "gf": 6,
      "gc": 19,
      "dg": "-13",
      "pts": 4
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 1,
      "pe": 0,
      "pp": 4,
      "gf": 6,
      "gc": 22,
      "dg": "-16",
      "pts": 3
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 8,
      "dg": "-8",
      "pts": 0
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 1,
      "gc": 14,
      "dg": "-13",
      "pts": 0
    }
  ],
  "SERIE SENIOR": [
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 5,
      "pe": 1,
      "pp": 0,
      "gf": 20,
      "gc": 8,
      "dg": "+12",
      "pts": 16
    },
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 4,
      "pe": 1,
      "pp": 0,
      "gf": 19,
      "gc": 9,
      "dg": "+10",
      "pts": 13
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 2,
      "pe": 2,
      "pp": 2,
      "gf": 13,
      "gc": 9,
      "dg": "+4",
      "pts": 8
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 2,
      "pe": 2,
      "pp": 1,
      "gf": 10,
      "gc": 8,
      "dg": "+2",
      "pts": 8
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 9,
      "gc": 8,
      "dg": "+1",
      "pts": 7
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 11,
      "gc": 13,
      "dg": "-2",
      "pts": 7
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 2,
      "pe": 1,
      "pp": 3,
      "gf": 12,
      "gc": 17,
      "dg": "-5",
      "pts": 7
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 0,
      "pe": 1,
      "pp": 4,
      "gf": 3,
      "gc": 20,
      "dg": "-17",
      "pts": 1
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 5,
      "dg": "-5",
      "pts": 0
    }
  ],
  "SERIE ORO": [
    {
      "team": "Manzana T.",
      "pj": 5,
      "pg": 5,
      "pe": 0,
      "pp": 0,
      "gf": 19,
      "gc": 2,
      "dg": "+17",
      "pts": 15
    },
    {
      "team": "R. Méndez",
      "pj": 6,
      "pg": 4,
      "pe": 2,
      "pp": 0,
      "gf": 8,
      "gc": 3,
      "dg": "+5",
      "pts": 14
    },
    {
      "team": "Barrabases",
      "pj": 5,
      "pg": 2,
      "pe": 3,
      "pp": 0,
      "gf": 9,
      "gc": 3,
      "dg": "+6",
      "pts": 9
    },
    {
      "team": "Estrella",
      "pj": 5,
      "pg": 2,
      "pe": 2,
      "pp": 1,
      "gf": 8,
      "gc": 6,
      "dg": "+2",
      "pts": 8
    },
    {
      "team": "Caupolicán",
      "pj": 6,
      "pg": 2,
      "pe": 2,
      "pp": 2,
      "gf": 7,
      "gc": 14,
      "dg": "-7",
      "pts": 8
    },
    {
      "team": "Chacay",
      "pj": 5,
      "pg": 2,
      "pe": 1,
      "pp": 2,
      "gf": 4,
      "gc": 8,
      "dg": "-4",
      "pts": 7
    },
    {
      "team": "Unión",
      "pj": 5,
      "pg": 2,
      "pe": 0,
      "pp": 3,
      "gf": 2,
      "gc": 10,
      "dg": "-8",
      "pts": 6
    },
    {
      "team": "Cruz Azul",
      "pj": 5,
      "pg": 0,
      "pe": 0,
      "pp": 5,
      "gf": 0,
      "gc": 5,
      "dg": "-5",
      "pts": 0
    },
    {
      "team": "Independiente",
      "pj": 6,
      "pg": 0,
      "pe": 0,
      "pp": 6,
      "gf": 0,
      "gc": 6,
      "dg": "-6",
      "pts": 0
    }
  ]
};
const SERIES=["SERIE PEQUES", "SERIE SEGUNDA INFANTIL", "SERIE PRIMERA INFANTIL", "SERIE JUVENILES", "SERIE ORO", "SERIE SUPER SENIOR", "SERIE SENIOR", "SERIE SEGUNDA ADULTOS", "SERIE PRIMERA ADULTOS", "SERIE PLATINOS", "SERIE HONOR"];

function emptyStandings(){
  const obj={};
  SERIES.forEach(s=>{
    obj[s]=OFFICIAL_STANDINGS[s] ? OFFICIAL_STANDINGS[s].map(r=>({...r})) : [
      {team:'R. Méndez',pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,dg:'0',pts:0}
    ];
  });
  return obj;
}

const DEFAULTS={
  clubName:'Club Deportivo Ricardo Méndez', mainTitle:'Ricardo Méndez', subtitle:'Más que un club, una familia.',
  description:'Web pública profesional con administración privada para noticias, socios, fixture, puntajes, fotos, videos, auspiciadores e historia institucional.',
  history:'El Club Deportivo Ricardo Méndez nace como una institución deportiva y social formada por vecinos, jugadores y familias que buscaban crear un espacio de unión, competencia y orgullo local. Desde sus inicios, el club ha representado pasión, esfuerzo y compromiso en cada serie, manteniendo viva su identidad a través del fútbol, el básquetbol, el ping pong y el trabajo comunitario.',
  president:'Información pendiente de confirmar', historyPhoto:'', anniversary:'12/08/2026',
  metrics:{series:'11',socios:'246',years:'94',titles:'2',sponsors:'0',anniversary:'12/08'},
  whatsapp:ADMIN_WHATSAPP, instagram:'https://www.instagram.com/cd_ricardomendez_sancarlos', facebook:'https://www.facebook.com/RICARDOMENDEZSANCARLOS',
  nextMatch:{rival:'Club Rival',logo:'',serie:'SERIE HONOR',date:'Sábado 25 Mayo',hour:'15:00 hrs',place:'Cancha por confirmar'},
  news:[{title:'Inicio de temporada',text:'El club prepara sus series para una nueva competencia.',date:'Publicado por administración',image:''},{title:'Campaña de socios',text:'Súmate a la familia del Club Deportivo Ricardo Méndez.',date:'Publicado por administración',image:''}],
  media:[], fixtureImages:[{"title": "Fixture Fecha 1", "image": "fixture_fecha_1.jpeg"}, {"title": "Fixture Fecha 2", "image": "fixture_fecha_2.jpeg"}, {"title": "Fixture Fecha 3", "image": "fixture_fecha_3.jpeg"}, {"title": "Fixture Fecha 4", "image": "fixture_fecha_4.jpeg"}, {"title": "Fixture Fecha 5", "image": "fixture_fecha_5.jpeg"}, {"title": "Fixture Fecha 6", "image": "fixture_fecha_6.jpeg"}],
  fixture:[],
  standings:emptyStandings(), sponsors:[], requests:[],
  results:[{date:'07/06',match:'Ricardo Méndez vs Chacay',score:'3 - 1',scorers:'Goleadores por confirmar'},{date:'01/06',match:'Ricardo Méndez vs Unión',score:'2 - 0',scorers:'Goleadores por confirmar'}],
  directiva:[{role:'Presidente',name:'Información pendiente'},{role:'Secretario',name:'Información pendiente'},{role:'Tesorero',name:'Información pendiente'}],
  presidents:[],
  palmares:[{year:'1932',title:'Fundación del Club Deportivo Ricardo Méndez'}],
  timeline:[{year:'1932',text:'Fundación del club'},{year:'2026',text:'Modernización digital institucional'}]
};


let supabaseClient = null;
let supabaseOnline = false;

function getSupabaseConfig(){
  try { return JSON.parse(localStorage.getItem(SUPABASE_CONFIG_KEY) || '{}'); }
  catch(e){ return {}; }
}
function setSupabaseConfig(url, anonKey){
  localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify({url, anonKey}));
}
function initSupabase(){
  const cfg = getSupabaseConfig();
  if(!cfg.url || !cfg.anonKey || !window.supabase){
    supabaseClient = null;
    supabaseOnline = false;
    return false;
  }
  supabaseClient = window.supabase.createClient(cfg.url, cfg.anonKey);
  supabaseOnline = true;
  return true;
}
async function testSupabase(){
  if(!initSupabase()) return false;
  try{
    const { error } = await supabaseClient.from('settings').select('key').limit(1);
    if(error) throw error;
    return true;
  }catch(e){
    console.warn('Supabase no disponible:', e.message);
    supabaseOnline = false;
    return false;
  }
}
async function uploadAsset(file, folder='uploads'){
  if(!supabaseOnline || !supabaseClient) return await fileToDataURL(file);
  const ext = (file.name.split('.').pop() || 'png').toLowerCase();
  const safeName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabaseClient.storage.from(SUPABASE_BUCKET).upload(safeName, file, {
    cacheControl: '3600',
    upsert: false
  });
  if(error){
    console.warn('Error subiendo archivo a Supabase, uso base64 local:', error.message);
    return await fileToDataURL(file);
  }
  const { data } = supabaseClient.storage.from(SUPABASE_BUCKET).getPublicUrl(safeName);
  return data.publicUrl;
}
async function saveSupabaseTable(table, rows){
  if(!supabaseOnline || !supabaseClient) return;
  await supabaseClient.from(table).delete().neq('id', '00000000-0000-0000-0000-000000000000');
  if(rows && rows.length){
    const { error } = await supabaseClient.from(table).insert(rows);
    if(error) throw error;
  }
}
async function pushDataToSupabase(d){
  if(!supabaseOnline || !supabaseClient) throw new Error('Supabase no conectado');
  await supabaseClient.from('settings').upsert([
    {key:'site', value:{
      clubName:d.clubName, mainTitle:d.mainTitle, subtitle:d.subtitle, description:d.description,
      history:d.history, historyPhoto:d.historyPhoto, president:d.president, anniversary:d.anniversary,
      metrics:d.metrics, whatsapp:d.whatsapp, instagram:d.instagram, facebook:d.facebook, nextMatch:d.nextMatch
    }}
  ], {onConflict:'key'});

  await saveSupabaseTable('sponsors', (d.sponsors||[]).map((x,i)=>({name:x.name,url:x.url,sort_order:i})));
  await saveSupabaseTable('news', (d.news||[]).map((x,i)=>({title:x.title,text:x.text,image:x.image,date_text:x.date,sort_order:i})));
  await saveSupabaseTable('gallery', (d.media||[]).map((x,i)=>({title:x.title,type:x.type,url:x.url,sort_order:i})));
  await saveSupabaseTable('fixture_images', (d.fixtureImages||[]).map((x,i)=>({title:x.title,image:x.image,sort_order:i})));
  await saveSupabaseTable('results', (d.results||[]).map((x,i)=>({date_text:x.date,match:x.match,score:x.score,scorers:x.scorers,sort_order:i})));
  await saveSupabaseTable('directors', (d.directiva||[]).map((x,i)=>({role:x.role,name:x.name,sort_order:i})));
  await saveSupabaseTable('presidents', (d.presidents||[]).map((x,i)=>({name:x.name,period:x.period,image:x.image,sort_order:i})));
  await saveSupabaseTable('honors', (d.palmares||[]).map((x,i)=>({year:x.year,title:x.title,sort_order:i})));
  await saveSupabaseTable('timeline', (d.timeline||[]).map((x,i)=>({year:x.year,text:x.text,sort_order:i})));

  const standingRows=[];
  Object.entries(d.standings||{}).forEach(([serie, rows])=>{
    (rows||[]).forEach((r,i)=>standingRows.push({
      serie, team:r.team, pj:+r.pj||0, pg:+r.pg||0, pe:+r.pe||0, pp:+r.pp||0,
      gf:+r.gf||0, gc:+r.gc||0, dg:String(r.dg||'0'), pts:+r.pts||0, sort_order:i
    }));
  });
  await saveSupabaseTable('standings', standingRows);
}
async function pullDataFromSupabase(){
  if(!supabaseOnline || !supabaseClient) throw new Error('Supabase no conectado');
  const d = mergeData(null);

  const { data: settings } = await supabaseClient.from('settings').select('*').eq('key','site').maybeSingle();
  if(settings?.value) Object.assign(d, settings.value);

  async function table(name){ const {data,error}=await supabaseClient.from(name).select('*').order('sort_order', {ascending:true}); if(error) throw error; return data||[]; }

  d.sponsors = (await table('sponsors')).map(x=>({name:x.name,url:x.url}));
  d.news = (await table('news')).map(x=>({title:x.title,text:x.text,image:x.image||'',date:x.date_text||''}));
  d.media = (await table('gallery')).map(x=>({title:x.title,type:x.type,url:x.url}));
  d.fixtureImages = (await table('fixture_images')).map(x=>({title:x.title,image:x.image}));
  d.results = (await table('results')).map(x=>({date:x.date_text,match:x.match,score:x.score,scorers:x.scorers}));
  d.directiva = (await table('directors')).map(x=>({role:x.role,name:x.name}));
  d.presidents = (await table('presidents')).map(x=>({name:x.name,period:x.period,image:x.image}));
  d.palmares = (await table('honors')).map(x=>({year:x.year,title:x.title}));
  d.timeline = (await table('timeline')).map(x=>({year:x.year,text:x.text}));

  const standingRows = await table('standings');
  if(standingRows.length){
    d.standings={};
    SERIES.forEach(s=>d.standings[s]=[]);
    standingRows.forEach(x=>{
      if(!d.standings[x.serie]) d.standings[x.serie]=[];
      d.standings[x.serie].push({team:x.team,pj:x.pj,pg:x.pg,pe:x.pe,pp:x.pp,gf:x.gf,gc:x.gc,dg:x.dg,pts:x.pts});
    });
  }
  return mergeData(d);
}
async function onlineSave(d){
  saveData(d);
  if(supabaseOnline){
    try{ await pushDataToSupabase(mergeData(d)); }
    catch(e){ console.warn('No se pudo sincronizar Supabase:', e.message); }
  }
}

function $(id){return document.getElementById(id)}; function text(id,val){const el=$(id); if(el)el.textContent=val??'';}
function mergeData(data){const d={...DEFAULTS,...(data||{})}; d.metrics={...DEFAULTS.metrics,...(data?.metrics||{})}; d.nextMatch={...DEFAULTS.nextMatch,...(data?.nextMatch||{})}; d.standings=data?.standings||emptyStandings(); ['news','media','fixture','fixtureImages','sponsors','requests','results','directiva','presidents','palmares','timeline'].forEach(k=>{if(!Array.isArray(d[k]))d[k]=DEFAULTS[k]||[]}); return d}
function getData(){try{const raw=localStorage.getItem(DATA_KEY); const d=mergeData(raw?JSON.parse(raw):null); localStorage.setItem(DATA_KEY,JSON.stringify(d)); return d}catch(e){localStorage.setItem(DATA_KEY,JSON.stringify(DEFAULTS)); return structuredClone(DEFAULTS)}}
function saveData(d){localStorage.setItem(DATA_KEY,JSON.stringify(mergeData(d)))}
function fileToDataURL(file){return new Promise((res,rej)=>{const r=new FileReader(); r.onload=()=>res(r.result); r.onerror=rej; r.readAsDataURL(file)})}

async function imageFileToTransparentDataURL(file){const original=await fileToDataURL(file); return new Promise(resolve=>{const img=new Image(); img.onload=()=>{const max=1100; let w=img.width,h=img.height,scale=Math.min(max/w,max/h,1); w=Math.round(w*scale); h=Math.round(h*scale); const canvas=document.createElement('canvas'); canvas.width=w; canvas.height=h; const ctx=canvas.getContext('2d',{willReadFrequently:true}); ctx.drawImage(img,0,0,w,h); removeBackgroundByEdges(canvas); const trimmed=trimTransparentCanvas(canvas); resolve(centerOnTransparentCanvas(trimmed,420,420,.94).toDataURL('image/png'))}; img.onerror=()=>resolve(original); img.src=original})}
function removeBackgroundByEdges(canvas){const ctx=canvas.getContext('2d',{willReadFrequently:true}),w=canvas.width,h=canvas.height,img=ctx.getImageData(0,0,w,h),data=img.data,visited=new Uint8Array(w*h),q=[]; const idx=(x,y)=>y*w+x; const isBg=(x,y)=>{const i=idx(x,y)*4,r=data[i],g=data[i+1],b=data[i+2],a=data[i+3],max=Math.max(r,g,b),min=Math.min(r,g,b); return a<18||(r>188&&g>188&&b>188&&(max-min)<82)||(r>225&&g>225&&b>225)||((r+g+b)/3>218&&(max-min)<95)}; for(let x=0;x<w;x++)q.push([x,0],[x,h-1]); for(let y=0;y<h;y++)q.push([0,y],[w-1,y]); while(q.length){const [x,y]=q.pop(); if(x<0||y<0||x>=w||y>=h)continue; const id=idx(x,y); if(visited[id])continue; visited[id]=1; if(!isBg(x,y))continue; data[id*4+3]=0; q.push([x+1,y],[x-1,y],[x,y+1],[x,y-1])} ctx.putImageData(img,0,0)}
function trimTransparentCanvas(canvas){const ctx=canvas.getContext('2d',{willReadFrequently:true}),w=canvas.width,h=canvas.height,data=ctx.getImageData(0,0,w,h).data; let top=h,left=w,right=0,bottom=0; for(let y=0;y<h;y++)for(let x=0;x<w;x++){const a=data[(y*w+x)*4+3]; if(a>12){if(x<left)left=x;if(x>right)right=x;if(y<top)top=y;if(y>bottom)bottom=y}} if(right<=left||bottom<=top)return canvas; const pad=24; left=Math.max(0,left-pad); top=Math.max(0,top-pad); right=Math.min(w,right+pad); bottom=Math.min(h,bottom+pad); const out=document.createElement('canvas'); out.width=right-left; out.height=bottom-top; out.getContext('2d').drawImage(canvas,left,top,out.width,out.height,0,0,out.width,out.height); return out}
function centerOnTransparentCanvas(canvas,outW=900,outH=900,fill=.86){const out=document.createElement('canvas'); out.width=outW; out.height=outH; const scale=Math.min(outW*fill/canvas.width,outH*fill/canvas.height,1.8),w=Math.round(canvas.width*scale),h=Math.round(canvas.height*scale); out.getContext('2d').drawImage(canvas,(outW-w)/2,(outH-h)/2,w,h); return out}

function animateNumber(el,target){if(!el)return; const end=parseInt(target)||0, dur=1200, start=performance.now(); function tick(t){const p=Math.min((t-start)/dur,1); el.textContent=Math.round(end*(1-Math.pow(1-p,3))); if(p<1)requestAnimationFrame(tick);} requestAnimationFrame(tick)}

function render(){const d=getData();
 text('siteClubName',d.clubName); text('mainTitle',d.mainTitle); text('mainSubtitle',d.subtitle); text('mainDescription',d.description); text('clubHistory',d.history); text('clubPresident',d.president); text('anniversaryText',d.anniversary); const hp=$('historyPhotoPublic'); if(hp){hp.src=d.historyPhoto||''; hp.style.display=d.historyPhoto?'block':'none';}
 [['metricSeries',d.metrics.series],['metricSocios',d.metrics.socios],['metricYears',d.metrics.years],['metricTitles',d.metrics.titles],['metricSponsors',d.metrics.sponsors]].forEach(([id,val])=>{const el=$(id); if(el){el.dataset.count=val; animateNumber(el,val)}}); text('metricAnniversary',d.metrics.anniversary);
 ['instagramTop','instagramPublic'].forEach(id=>{const el=$(id); if(el)el.href=d.instagram}); ['facebookTop','facebookPublic'].forEach(id=>{const el=$(id); if(el)el.href=d.facebook}); const wa=$('whatsappPublic'); if(wa)wa.href=`https://wa.me/${d.whatsapp||ADMIN_WHATSAPP}`;
 const m=d.nextMatch; text('homeTeamName','Ricardo Méndez'); text('rivalNamePublic',m.rival); text('nextMatchPublic',`${m.date} · ${m.hour}`); text('nextPlacePublic',m.place); const rl=$('rivalLogoPublic'); if(rl){rl.src=m.logo||''; rl.style.display=m.logo?'block':'none'}
 renderSponsors(d); renderNews(d); renderGallery(d); renderFixture(d); renderStandings(); renderSeriesScoreChart(); renderCumulative(); renderResults(d); renderRanking(); renderPride(); renderDirectiva(d); renderPresidents(d); renderPalmares(d); renderTimeline(d); renderAdminLists(d); renderRequests()}
function sponsorCard(s){return `<article><div class="sponsor-logo"><img src="${s.url}" alt="${s.name}" onerror="this.closest('article').style.display='none'"></div><h3>${s.name}</h3></article>`}
function renderSponsors(d){const sec=document.querySelector('.top-sponsors'),top=$('topSponsorGrid'); if(!sec||!top)return; if(!d.sponsors.length){sec.style.display='none'; top.innerHTML=''; return} sec.style.display='block'; top.innerHTML=[...d.sponsors,...d.sponsors,...d.sponsors].map(sponsorCard).join('')}
function renderNews(d){const g=$('newsGrid'); if(!g)return; g.innerHTML=d.news.map(n=>`<article><div class="thumb" style="${n.image?`background-image:linear-gradient(135deg,rgba(0,187,255,.18),rgba(215,170,49,.12)),url('${n.image}')`:''}"></div><h3>${n.title}</h3><p>${n.text}</p><small>${n.date}</small></article>`).join('')}
function renderGallery(d){const g=$('galleryGrid'); if(!g)return; g.innerHTML=d.media.map(m=>`<article>${m.type==='Video'?`<video src="${m.url}" controls></video>`:`<img src="${m.url}" alt="${m.title}">`}<div><h3>${m.title}</h3><p>${m.type}</p></div></article>`).join('')}
function renderFixture(d){
  const g=$('fixtureImageGrid'); if(!g)return;
  g.innerHTML=(d.fixtureImages||[]).map(f=>`<article><img src="${f.image}" alt="${f.title}"><div><h3>${f.title}</h3></div></article>`).join('');
}
function rmSeriesRows(){
  const d=getData();
  return SERIES.map(serie=>{
    const rows=sortRows(d.standings[serie]||[]);
    const idx=rows.findIndex(r=>isRM(r.team));
    const rm=idx>=0?rows[idx]:null;
    return {serie,pts:Number(rm?.pts||0),pos:idx>=0?idx+1:null,dg:rm?.dg||'0'};
  })
}
function renderRanking(){
  const box=$('rankingRows'); if(!box)return;
  const rows=rmSeriesRows().filter(r=>r.pos).sort((a,b)=>b.pts-a.pts),total=rows.reduce((a,r)=>a+r.pts,0);
  text('rankingTotal',`${total} pts`);
  box.innerHTML=rows.map((r,i)=>`<div class="ranking-row"><b>${i+1}</b><span>${r.serie}<small>${r.pos}° lugar</small></span><strong>${r.pts} pts</strong></div>`).join('');
}
function renderPride(){
  const g=$('prideGrid'); if(!g)return;
  const rows=rmSeriesRows().filter(r=>r.pos).sort((a,b)=>a.pos-b.pos||b.pts-a.pts).slice(0,6);
  g.innerHTML=rows.map(r=>{
    const medal=r.pos===1?'🥇':r.pos===2?'🥈':r.pos===3?'🥉':'⚽';
    return `<article><b>${medal}</b><h3>${r.serie}</h3><p>${r.pos}° lugar · ${r.pts} pts · DG ${r.dg}</p></article>`;
  }).join('');
}
function renderSeriesScoreChart(){
  const chart=$('seriesScoreChart'); if(!chart)return;
  const rows=rmSeriesRows(),max=Math.max(...rows.map(r=>r.pts),1),total=rows.reduce((a,r)=>a+r.pts,0);
  text('chartTotalPoints',`${total} pts`);
  chart.innerHTML=rows.map(r=>`<div class="score-row"><div class="score-label">${r.serie}</div><div class="score-track"><div class="score-bar" style="width:${Math.max(4,Math.round(r.pts/max*100))}%"></div></div><div class="score-value">${r.pts} pts</div></div>`).join('');
}
function renderCumulative(){
  const d=getData(),t=$('cumulativeRows'); if(!t)return; const acc={};
  Object.values(d.standings).flat().forEach(r=>{
    const name=isRM(r.team)?'R. Méndez':r.team;
    if(!acc[name])acc[name]={team:name,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,dg:0,pts:0};
    acc[name].pj+=+r.pj||0; acc[name].pg+=+r.pg||0; acc[name].pe+=+r.pe||0; acc[name].pp+=+r.pp||0; acc[name].gf+=+r.gf||0; acc[name].gc+=+r.gc||0; acc[name].dg+=parseInt(String(r.dg).replace('+',''))||0; acc[name].pts+=+r.pts||0
  });
  const rows=Object.values(acc).sort((a,b)=>b.pts-a.pts||b.dg-a.dg);
  t.innerHTML=rows.map((r,i)=>`<tr class="${i===0?'leader':''} ${r.team==='R. Méndez'?'rm-highlight':''}"><td>${i+1}</td><td>${r.team}</td><td>${r.pj}</td><td>${r.pg}</td><td>${r.pe}</td><td>${r.pp}</td><td>${r.gf}</td><td>${r.gc}</td><td>${r.dg>0?'+':''}${r.dg}</td><td>${r.pts}</td></tr>`).join('');
}

function setup(){$('standingSerieSelect')?.addEventListener('change',renderStandings); document.querySelectorAll('.serie-pill').forEach(btn=>btn.addEventListener('click',()=>{$('standingSerieSelect').value=btn.dataset.serie; document.querySelector('#posiciones')?.scrollIntoView({behavior:'smooth'}); renderStandings()}));
 $('memberRequestForm')?.addEventListener('submit',async e=>{e.preventDefault(); const d=getData(),s={name:memberName.value,rut:memberRut.value,phone:memberPhone.value,type:memberType.value}; d.requests.push(s); await onlineSave(d); const msg=`Nueva solicitud de socio Club Deportivo Ricardo Méndez:%0A%0ANombre: ${encodeURIComponent(s.name)}%0ARUT: ${encodeURIComponent(s.rut)}%0ATeléfono: ${encodeURIComponent(s.phone)}%0ATipo: ${encodeURIComponent(s.type)}`; window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${msg}`,'_blank'); e.target.reset(); renderRequests()});
 const openModal=()=>{ const m=$('adminModal'); if(m) m.classList.add('show'); }; $('openAdmin')?.addEventListener('click',openModal); $('openAdminTop')?.addEventListener('click',openModal); $('closeAdmin')?.addEventListener('click',()=>{ const m=$('adminModal'); if(m) m.classList.remove('show'); });
 $('loginBtn')?.addEventListener('click',async()=>{if(adminPassword.value!==ADMIN_PASS)return alert('Clave incorrecta'); loginPanel.classList.add('hidden'); adminPanel.classList.remove('hidden'); loadAdminFields()});
 document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active')); document.querySelectorAll('.tab-content').forEach(x=>x.classList.add('hidden')); btn.classList.add('active'); $(btn.dataset.tab)?.classList.remove('hidden'); renderAdminLists(getData()); renderRequests()}));
 $('saveGeneral')?.addEventListener('click',async()=>{const d=getData(); d.clubName=editClubName.value; d.mainTitle=editMainTitle.value; d.subtitle=editSubtitle.value; d.description=editDescription.value; d.anniversary=anniversaryInput.value; d.whatsapp=whatsappInput.value||ADMIN_WHATSAPP; d.instagram=instagramInput.value; d.facebook=facebookInput.value; d.metrics={series:metricSeriesInput.value||'11',socios:metricSociosInput.value||'246',years:metricYearsInput.value||'94',titles:metricTitlesInput.value||'0',sponsors:metricSponsorsInput.value||String(d.sponsors.length),anniversary:metricAnniversaryInput.value||'12/08'}; await onlineSave(d); render(); alert('Información general actualizada.')});
 $('saveMatch')?.addEventListener('click',async()=>{const d=getData(); let logo=matchLogoUrl.value; if(matchLogoFile.files[0])logo=await imageFileToTransparentDataURL(matchLogoFile.files[0]); d.nextMatch={rival:matchRival.value,logo,serie:matchSerie.value,date:matchDate.value,hour:matchHour.value,place:matchPlace.value}; await onlineSave(d); render(); alert('Próximo partido actualizado.')});
 $('saveHistory')?.addEventListener('click',async()=>{
  const d=getData();
  d.history=historyInput.value;
  d.president=presidentInput.value;
  let photo=historyPhotoUrl.value;
  if(historyPhotoFile.files[0]) photo=await uploadAsset(historyPhotoFile.files[0], 'history');
  d.historyPhoto=photo||'';
  await onlineSave(d); render(); alert('Historia actualizada.');
});
 $('addDirectiva')?.addEventListener('click',async()=>{const d=getData(); d.directiva.push({role:dirRole.value,name:dirName.value}); saveData(d); dirRole.value=dirName.value=''; render()});
 $('addPresidentGallery')?.addEventListener('click',async()=>{
  const d=getData();
  let image=presidentGalleryUrl.value;
  if(presidentGalleryFile.files[0]) image=await uploadAsset(presidentGalleryFile.files[0], 'presidents');
  if(!presidentGalleryName.value||!image) return alert('Agrega nombre y fotografía.');
  d.presidents.push({name:presidentGalleryName.value,period:presidentGalleryPeriod.value,image});
  saveData(d);
  presidentGalleryName.value=presidentGalleryPeriod.value=presidentGalleryUrl.value='';
  presidentGalleryFile.value='';
  render();
});
 $('addPalmares')?.addEventListener('click',async()=>{const d=getData(); d.palmares.push({year:palYear.value,title:palTitle.value}); d.metrics.titles=String(d.palmares.length); saveData(d); palYear.value=palTitle.value=''; render()});
 $('addTimeline')?.addEventListener('click',async()=>{const d=getData(); d.timeline.push({year:timeYear.value,text:timeText.value}); saveData(d); timeYear.value=timeText.value=''; render()});
 $('addResult')?.addEventListener('click',async()=>{const d=getData(); d.results.unshift({date:resDate.value,match:resMatch.value,score:resScore.value,scorers:resScorers.value}); saveData(d); resDate.value=resMatch.value=resScore.value=resScorers.value=''; render()});
 $('addNews')?.addEventListener('click',async()=>{if(!newsTitle.value||!newsText.value)return alert('Completa los datos.'); const d=getData(); let image=newsImageUrl.value; if(newsImageFile.files[0])image=await uploadAsset(newsImageFile.files[0], 'news'); d.news.unshift({title:newsTitle.value,text:newsText.value,date:new Date().toLocaleDateString('es-CL'),image}); saveData(d); newsTitle.value=newsText.value=newsImageUrl.value=''; newsImageFile.value=''; render()});
 $('addMedia')?.addEventListener('click',async()=>{if(!mediaTitle.value)return alert('Agrega título.'); let url=mediaUrl.value,type=mediaType.value; if(mediaFile.files[0]){url=await uploadAsset(mediaFile.files[0], 'gallery'); type=mediaFile.files[0].type.startsWith('video')?'Video':'Foto'} if(!url)return alert('Adjunta archivo o pega URL.'); const d=getData(); d.media.unshift({title:mediaTitle.value,type,url}); saveData(d); mediaTitle.value=mediaUrl.value=''; mediaFile.value=''; render()});
 $('addFixtureImage')?.addEventListener('click',async()=>{
  const d=getData();
  let image=fixtureImageUrl.value;
  if(fixtureImageFile.files[0]) image=await uploadAsset(fixtureImageFile.files[0], 'fixture');
  if(!fixtureImageTitle.value||!image) return alert('Agrega título e imagen del fixture.');
  d.fixtureImages.unshift({title:fixtureImageTitle.value,image});
  saveData(d);
  fixtureImageTitle.value=fixtureImageUrl.value='';
  fixtureImageFile.value='';
  render();
});
 $('addPosition')?.addEventListener('click',async()=>{const d=getData(); if(!d.standings[posSerie.value])d.standings[posSerie.value]=[]; d.standings[posSerie.value].push({team:posTeam.value,pj:posPJ.value||0,pg:posPG.value||0,pe:posPE.value||0,pp:posPP.value||0,dg:posDG.value||'0',pts:posPTS.value||0}); saveData(d); [posTeam,posPJ,posPG,posPE,posPP,posDG,posPTS].forEach(i=>i.value=''); standingSerieSelect.value=posSerie.value; render()});
 $('importCsv')?.addEventListener('click',async()=>{if(!positionsCsv.files[0])return alert('Adjunta CSV.'); const text=await positionsCsv.files[0].text(),d=getData(); text.split(/\r?\n/).slice(1).forEach(line=>{if(!line.trim())return; const [serie,equipo,pj,pg,pe,pp,dg,pts]=line.split(',').map(x=>x?.trim()); if(!serie||!equipo)return; if(!d.standings[serie])d.standings[serie]=[]; d.standings[serie].push({team:equipo,pj:pj||0,pg:pg||0,pe:pe||0,pp:pp||0,dg:dg||'0',pts:pts||0})}); saveData(d); render()});
 $('downloadTemplateAdmin')?.addEventListener('click',async()=>{const csv='serie,equipo,pj,pg,pe,pp,dg,pts\nSERIE HONOR,Ricardo Méndez,10,7,2,1,+15,23\n'; const blob=new Blob([csv],{type:'text/csv'}),a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='plantilla_puntajes.csv'; a.click()});
 $('addSponsor')?.addEventListener('click',async()=>{const d=getData(); let url=sponsorUrl.value; if(sponsorFile.files[0])url=await imageFileToTransparentDataURL(sponsorFile.files[0]); if(!sponsorName.value||!url)return alert('Agrega nombre e imagen/URL.'); d.sponsors.push({name:sponsorName.value,url}); d.metrics.sponsors=String(d.sponsors.length); saveData(d); sponsorName.value=sponsorUrl.value=''; sponsorFile.value=''; render()});
 
 $('saveSupabaseConfig')?.addEventListener('click',async()=>{
   setSupabaseConfig(supabaseUrlInput.value.trim(), supabaseAnonInput.value.trim());
   const ok = await testSupabase();
   supabaseStatus.textContent = ok ? 'Estado: conectado a Supabase.' : 'Estado: error de conexión. Revisa URL, anon key y tablas.';
   if(ok) alert('Supabase conectado correctamente.');
 });
 $('syncToSupabase')?.addEventListener('click',async()=>{
   const ok = await testSupabase();
   if(!ok) return alert('Primero conecta Supabase.');
   await pushDataToSupabase(getData());
   supabaseStatus.textContent='Estado: datos subidos a Supabase.';
   alert('Datos actuales subidos a Supabase.');
 });
 $('loadFromSupabase')?.addEventListener('click',async()=>{
   const ok = await testSupabase();
   if(!ok) return alert('Primero conecta Supabase.');
   const data = await pullDataFromSupabase();
   saveData(data);
   render();
   supabaseStatus.textContent='Estado: datos cargados desde Supabase.';
 });

 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show'); observer.unobserve(e.target)}}),{threshold:.12}); document.querySelectorAll('.section,.metrics article').forEach(el=>{el.classList.add('reveal'); observer.observe(el)})
}
function loadAdminFields(){const d=getData(); const cfg=getSupabaseConfig(); if($('supabaseUrlInput')) supabaseUrlInput.value=cfg.url||''; if($('supabaseAnonInput')) supabaseAnonInput.value=cfg.anonKey||''; if($('supabaseStatus')) supabaseStatus.textContent=supabaseOnline?'Estado: conectado a Supabase.':'Estado: no conectado.'; editClubName.value=d.clubName; editMainTitle.value=d.mainTitle; editSubtitle.value=d.subtitle; editDescription.value=d.description; anniversaryInput.value=d.anniversary; whatsappInput.value=d.whatsapp; instagramInput.value=d.instagram; facebookInput.value=d.facebook; metricSeriesInput.value=d.metrics.series; metricSociosInput.value=d.metrics.socios; metricYearsInput.value=d.metrics.years; metricTitlesInput.value=d.metrics.titles; metricSponsorsInput.value=d.metrics.sponsors; metricAnniversaryInput.value=d.metrics.anniversary; historyInput.value=d.history; historyPhotoUrl.value=d.historyPhoto||''; presidentInput.value=d.president; matchRival.value=d.nextMatch.rival; matchSerie.value=d.nextMatch.serie; matchDate.value=d.nextMatch.date; matchHour.value=d.nextMatch.hour; matchPlace.value=d.nextMatch.place; matchLogoUrl.value=d.nextMatch.logo; renderAdminLists(d)}
document.addEventListener('DOMContentLoaded',async()=>{
  setup();
  initSupabase();
  if(supabaseOnline){
    try{
      const cloudData = await pullDataFromSupabase();
      saveData(cloudData);
    }catch(e){ console.warn('Carga inicial Supabase falló:', e.message); }
  }
  render();
});
