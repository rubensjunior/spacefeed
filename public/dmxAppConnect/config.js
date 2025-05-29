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
    ],
    "status": {
      "meta": [],
      "outputType": "number"
    }
  },
  "escolhaempresa": {
    "repeatEmpresas": {
      "meta": [
        {
          "type": "text",
          "name": "id_usuario_empresa"
        },
        {
          "type": "datetime",
          "name": "created_at_usuario_empresa"
        },
        {
          "type": "number",
          "name": "ref_id_usuario"
        },
        {
          "type": "number",
          "name": "ref_id_empresa"
        },
        {
          "type": "text",
          "name": "cargo_usuario_empresa"
        },
        {
          "type": "text",
          "name": "status_usuario"
        },
        {
          "type": "text",
          "name": "id_empresa"
        },
        {
          "type": "datetime",
          "name": "created_at_empresa"
        },
        {
          "type": "text",
          "name": "razao_social"
        },
        {
          "type": "text",
          "name": "nome_fantasia"
        },
        {
          "type": "text",
          "name": "nome_polo"
        },
        {
          "type": "text",
          "name": "cnpj"
        },
        {
          "type": "text",
          "name": "cep"
        },
        {
          "type": "text",
          "name": "whatsapp"
        },
        {
          "type": "text",
          "name": "status_empresa"
        },
        {
          "type": "text",
          "name": "logradouro"
        },
        {
          "type": "text",
          "name": "numero"
        },
        {
          "type": "text",
          "name": "complemento"
        },
        {
          "type": "text",
          "name": "bairro"
        },
        {
          "type": "text",
          "name": "cidade"
        },
        {
          "type": "text",
          "name": "uf"
        }
      ],
      "outputType": "array"
    }
  }
});
