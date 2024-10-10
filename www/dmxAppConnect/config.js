dmx.config({
  "index": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ],
    "redirect-login": {
      "meta": {},
      "local": [
        {
          "name": "",
          "type": "boolean",
          "metaData": {
            "condition": {
              "meta": null,
              "outputType": "number"
            }
          }
        }
      ]
    }
  },
  "dashboard": {
    "localStorage": [
      {
        "type": "number",
        "name": "id"
      }
    ]
  },
  "colaboradores": {
    "lista": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "isAdmin"
        },
        {
          "type": "boolean",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "boolean",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "idempresa"
        },
        {
          "type": "boolean",
          "name": "academico"
        },
        {
          "type": "boolean",
          "name": "administrativo"
        },
        {
          "type": "boolean",
          "name": "comercial"
        },
        {
          "type": "boolean",
          "name": "diretoria"
        },
        {
          "type": "boolean",
          "name": "financeiro"
        },
        {
          "type": "boolean",
          "name": "marketing"
        },
        {
          "type": "boolean",
          "name": "atendimento"
        },
        {
          "type": "boolean",
          "name": "ti"
        }
      ],
      "outputType": "array"
    },
    "listaColaboradores": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "isAdmin"
        },
        {
          "type": "boolean",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "boolean",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "idempresa"
        },
        {
          "type": "boolean",
          "name": "academico"
        },
        {
          "type": "boolean",
          "name": "administrativo"
        },
        {
          "type": "boolean",
          "name": "comercial"
        },
        {
          "type": "boolean",
          "name": "diretoria"
        },
        {
          "type": "boolean",
          "name": "financeiro"
        },
        {
          "type": "boolean",
          "name": "marketing"
        },
        {
          "type": "boolean",
          "name": "atendimento"
        },
        {
          "type": "boolean",
          "name": "ti"
        }
      ],
      "outputType": "array"
    },
    "editarColagorador": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "email"
        },
        {
          "type": "boolean",
          "name": "isAdmin"
        },
        {
          "type": "boolean",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "boolean",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "idempresa"
        },
        {
          "type": "boolean",
          "name": "academico"
        },
        {
          "type": "boolean",
          "name": "administrativo"
        },
        {
          "type": "boolean",
          "name": "comercial"
        },
        {
          "type": "boolean",
          "name": "diretoria"
        },
        {
          "type": "boolean",
          "name": "financeiro"
        },
        {
          "type": "boolean",
          "name": "marketing"
        },
        {
          "type": "boolean",
          "name": "atendimento"
        },
        {
          "type": "boolean",
          "name": "ti"
        }
      ],
      "outputType": "array"
    },
    "editacademicocheck": {
      "meta": null,
      "outputType": "text"
    },
    "editadministrativo": {
      "meta": null,
      "outputType": "object"
    },
    "editatendimentocheck": {
      "meta": null,
      "outputType": "text"
    },
    "editcomercialcheck": {
      "meta": null,
      "outputType": "text"
    },
    "editdiretoriacheck": {
      "meta": null,
      "outputType": "text"
    },
    "editfinanceirocheck": {
      "meta": null,
      "outputType": "text"
    },
    "editmktcheck": {
      "meta": null,
      "outputType": "text"
    },
    "editticheck": {
      "meta": null,
      "outputType": "text"
    }
  }
});
