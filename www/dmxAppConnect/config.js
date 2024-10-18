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
          "type": "number",
          "name": "isAdmin"
        },
        {
          "type": "number",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "academico"
        },
        {
          "type": "number",
          "name": "administrativo"
        },
        {
          "type": "number",
          "name": "comercial"
        },
        {
          "type": "number",
          "name": "diretoria"
        },
        {
          "type": "number",
          "name": "financeiro"
        },
        {
          "type": "number",
          "name": "marketing"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "ti"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "editarColagorador": {
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
          "type": "number",
          "name": "isAdmin"
        },
        {
          "type": "number",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "academico"
        },
        {
          "type": "number",
          "name": "administrativo"
        },
        {
          "type": "number",
          "name": "comercial"
        },
        {
          "type": "number",
          "name": "diretoria"
        },
        {
          "type": "number",
          "name": "financeiro"
        },
        {
          "type": "number",
          "name": "marketing"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "ti"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
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
  },
  "times": {
    "liagetemTimes": {
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
          "type": "number",
          "name": "empresa"
        }
      ],
      "outputType": "array"
    },
    "data_time": {
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
          "type": "number",
          "name": "empresa"
        }
      ],
      "outputType": "array"
    },
    "listagemTimeUsuario": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "text",
          "name": "time"
        },
        {
          "type": "text",
          "name": "colaborador"
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
          "type": "number",
          "name": "isAdmin"
        },
        {
          "type": "number",
          "name": "isColaborador"
        },
        {
          "type": "number",
          "name": "isAtivo"
        },
        {
          "type": "text",
          "name": "passSecurity"
        },
        {
          "type": "number",
          "name": "academico"
        },
        {
          "type": "number",
          "name": "administrativo"
        },
        {
          "type": "number",
          "name": "comercial"
        },
        {
          "type": "number",
          "name": "diretoria"
        },
        {
          "type": "number",
          "name": "financeiro"
        },
        {
          "type": "number",
          "name": "marketing"
        },
        {
          "type": "number",
          "name": "atendimento"
        },
        {
          "type": "number",
          "name": "ti"
        }
      ],
      "outputType": "array"
    },
    "membros": {
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
          "type": "number",
          "name": "empresa"
        },
        {
          "name": "Usuarios",
          "type": "array",
          "sub": [
            {
              "type": "text",
              "name": "nome"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "nomes": {
      "meta": [
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "nome": {
      "meta": [
        {
          "type": "text",
          "name": "id"
        },
        {
          "type": "text",
          "name": "empresa"
        },
        {
          "type": "text",
          "name": "time"
        },
        {
          "type": "text",
          "name": "colaborador"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "listaMembrosTime": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "membro"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "number",
          "name": "isAtivo"
        }
      ],
      "outputType": "array"
    },
    "listagemMembrosTime": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "membro"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "number",
          "name": "ativo"
        },
        {
          "type": "number",
          "name": "isAtivo"
        }
      ],
      "outputType": "array"
    },
    "liagetemProjetos": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-projeto"
        },
        {
          "type": "text",
          "name": "descricao-projeto"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "data_projeto": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "nome-projeto"
        },
        {
          "type": "text",
          "name": "descricao-projeto"
        },
        {
          "type": "number",
          "name": "times"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "number",
          "name": "criado-por"
        }
      ],
      "outputType": "array"
    },
    "tarefas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "listatarefas": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    },
    "data_tarefa": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "datetime",
          "name": "criado-em"
        },
        {
          "type": "text",
          "name": "titulo"
        },
        {
          "type": "number",
          "name": "criado-por"
        },
        {
          "type": "text",
          "name": "descricao-tarefa"
        },
        {
          "type": "number",
          "name": "status"
        },
        {
          "type": "date",
          "name": "data-inicio"
        },
        {
          "type": "date",
          "name": "data-fim"
        },
        {
          "type": "number",
          "name": "projeto"
        },
        {
          "type": "number",
          "name": "empresa"
        },
        {
          "type": "number",
          "name": "responsavel"
        },
        {
          "type": "text",
          "name": "nome"
        }
      ],
      "outputType": "array"
    }
  }
});
