dmx.config({
  "criarconta": {
    "registration_data": [
      {
        "name": "step",
        "type": "number"
      },
      {
        "name": "plan",
        "type": "text"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "planDiscount",
        "type": "number"
      }
    ]
  },
  "criarConta": {
    "planValues": [
      {
        "name": "precos",
        "type": "object",
        "sub": [
          {
            "name": "basico",
            "type": "number"
          },
          {
            "name": "pro",
            "type": "number"
          },
          {
            "name": "enterprise",
            "type": "number"
          },
          {
            "name": "poloAdicional",
            "type": "number"
          }
        ]
      },
      {
        "name": "selecionado",
        "type": "object",
        "sub": [
          {
            "name": "plano",
            "type": "number"
          },
          {
            "name": "polos",
            "type": "number"
          },
          {
            "name": "valorPlano",
            "type": "number"
          },
          {
            "name": "valorPolos",
            "type": "number"
          },
          {
            "name": "total",
            "type": "number"
          }
        ]
      }
    ],
    "planoEscolhido": {
      "meta": [
        {
          "type": "text",
          "name": "id_plano"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "number",
          "name": "valor_base"
        },
        {
          "type": "number",
          "name": "qtd_polos_incluidos"
        },
        {
          "type": "number",
          "name": "valor_polo_extra"
        },
        {
          "type": "number",
          "name": "limite_colaboradores_por_polo"
        },
        {
          "type": "number",
          "name": "limite_alunos_por_polo"
        },
        {
          "type": "number",
          "name": "odem"
        }
      ],
      "outputType": "array"
    }
  },
  "signup": {
    "data_detail_plano_escolhido": {
      "meta": [
        {
          "type": "text",
          "name": "id_plano"
        },
        {
          "type": "text",
          "name": "nome"
        },
        {
          "type": "text",
          "name": "descricao"
        },
        {
          "type": "number",
          "name": "valor_base"
        },
        {
          "type": "number",
          "name": "qtd_polos_incluidos"
        },
        {
          "type": "number",
          "name": "valor_polo_extra"
        },
        {
          "type": "number",
          "name": "limite_colaboradores_por_polo"
        },
        {
          "type": "number",
          "name": "limite_alunos_por_polo"
        }
      ],
      "outputType": "array"
    },
    "valorPlanoEscolhido": [
      {
        "name": "valor",
        "type": "number"
      }
    ]
  }
});
