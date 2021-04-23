export const data = [
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "Pentium",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "Pentium",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '14"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '14"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7009695",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7009695",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lanix",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lanix",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4 Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4 Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "PC LANIX NEURON A-X16P 3520",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "PC LANIX NEURON A-X16P 3520",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "480 Gb Estado Sólido",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "480 Gb Estado Sólido",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1905882,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1905882,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: 'LAPTOP X16P NEURON A PNTNM 14" LCD LANX',
        id: "PO_Tec7009695",
      },
    ],
    id: "PO_Tec7009695",
    href: "undefinedproductOffering/PO_Tec7009695",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resistencia",
                id: "Resistencia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resistencia",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TecnologiaIoT",
                id: "TecnologiaIoT",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TecnologiaIoT",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MemoriaROMRAM",
                id: "MemoriaROMRAM",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MemoriaROMRAM",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Comunicaciones",
                id: "Comunicaciones",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Comunicaciones",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Multimedia",
                id: "Multimedia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Multimedia",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Sensores",
                id: "Sensores",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Sensores",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 9.9999999e7,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 9.9999999e7,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "BasePO_TecIoTRelojInteligente",
        id: "PO_Tec7010860",
      },
    ],
    id: "PO_Tec7010860",
    href: "undefinedproductOffering/PO_Tec7010860",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "Core i3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "Core i3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '14"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '14"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7010336",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7010336",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lanix",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lanix",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4 Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4 Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "PC LANIX NEURON G6-X16I3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "PC LANIX NEURON G6-X16I3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "480 Gb Estado Sólido",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "480 Gb Estado Sólido",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2238656,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2238656,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "LAPTOP G6-X16I3 NEURON LANX",
        id: "PO_Tec7010336",
      },
    ],
    id: "PO_Tec7010336",
    href: "undefinedproductOffering/PO_Tec7010336",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "Pentium",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "Pentium",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '15.6"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '15.6"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7010337",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7010337",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lanix",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lanix",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "8 Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "8 Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "PC LANIX NEURON V-16P 3710",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "PC LANIX NEURON V-16P 3710",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value:
                  "USB 3.0 2.0, HDMI, Audio, microfono, radura disco duro, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "240 Gb Estado Sólido",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "240 Gb Estado Sólido",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1951261,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1951261,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "LAPTOP V-16P NEURON LANX",
        id: "PO_Tec7010337",
      },
    ],
    id: "PO_Tec7010337",
    href: "undefinedproductOffering/PO_Tec7010337",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "7010747",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7010747",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Hewlet Packard",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "HewletPackard",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Bandeja de 60 hojas",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ManejoPapel",
                id: "ManejoPapel",
                type: "pscmUserAttribute",
                value: "Bandeja de 60 hojas",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ManejoPapel",
          },
          {
            versions: [
              {
                displayValue: "Imprime, copia, escanea, de manera",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Funciones",
                id: "Funciones",
                type: "pscmUserAttribute",
                value: "Imprime, copia, escanea, de manera",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Funciones",
          },
          {
            versions: [
              {
                displayValue: "IMPRESORA DESKJET 3775 (J9V87A#AKY)",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "IMPRESORA DESKJET 3775 (J9V87A#AKY)",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "216x355 mm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TamanoMaxEscaneo",
                id: "TamanoMaxEscaneo",
                type: "pscmUserAttribute",
                value: "216x355 mm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TamanoMaxEscaneo",
          },
          {
            versions: [
              {
                displayValue: "Hasta 1.000 pag mensuales AG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CicloTrabajo",
                id: "CicloTrabajo",
                type: "pscmUserAttribute",
                value: "Hasta 1.000 pag mensuales AG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CicloTrabajo",
          },
          {
            versions: [
              {
                displayValue: "Inyeccion termica de tinta HP",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TecnologiaImpresion",
                id: "TecnologiaImpresion",
                type: "pscmUserAttribute",
                value: "Inyeccion termica de tinta HP",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TecnologiaImpresion",
          },
          {
            versions: [
              {
                displayValue:
                  "Negro (borrador): Hasta 19 ppm; Color (borrador): Hasta 15 ppm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Velocidad",
                id: "Velocidad",
                type: "pscmUserAttribute",
                value:
                  "Negro (borrador): Hasta 19 ppm; Color (borrador): Hasta 15 ppm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Velocidad",
          },
          {
            versions: [
              {
                displayValue: "600 a 1200ppp",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ResolucionEscaneo",
                id: "ResolucionEscaneo",
                type: "pscmUserAttribute",
                value: "600 a 1200ppp",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ResolucionEscaneo",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Impresora",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Impresora",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 208738.66,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 208738.66,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "IMPRESORA J9V87A INK ADV 3775 HEWP",
        id: "PO_Tec7010747",
      },
    ],
    id: "PO_Tec7010747",
    href: "undefinedproductOffering/PO_Tec7010747",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "7011006",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011006",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Horus",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Horus",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Remoto",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Monitoreo",
                id: "Monitoreo",
                type: "pscmUserAttribute",
                value: "Remoto",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Monitoreo",
          },
          {
            versions: [
              {
                displayValue: "Inalámbrica",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TecnologiaIoT",
                id: "TecnologiaIoT",
                type: "pscmUserAttribute",
                value: "Inalámbrica",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TecnologiaIoT",
          },
          {
            versions: [
              {
                displayValue: "Kit de inicio Horus Smart Control",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "Kit de inicio Horus Smart Control",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Hasta 100 dispositivos",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Capacidad",
                id: "Capacidad",
                type: "pscmUserAttribute",
                value: "Hasta 100 dispositivos",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Capacidad",
          },
          {
            versions: [
              {
                displayValue: "HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Camara",
                id: "Camara",
                type: "pscmUserAttribute",
                value: "HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Camara",
          },
          {
            versions: [
              {
                displayValue:
                  "1 controlador horus Plus, 1 camara HD, 1 Sirena de interiores, 1 sensor de puerta ventana.",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Accesorios",
                id: "Accesorios",
                type: "pscmUserAttribute",
                value:
                  "1 controlador horus Plus, 1 camara HD, 1 Sirena de interiores, 1 sensor de puerta ventana.",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Accesorios",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "InternetdelasCosas",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "InternetdelasCosas",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "SeguridadHogar",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "SeguridadHogar",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1224000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1224000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "KIT SEGURIDAD HSC-K9821 SMART CONTR HORU",
        id: "PO_Tec7011006",
      },
    ],
    id: "PO_Tec7011006",
    href: "undefinedproductOffering/PO_Tec7011006",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "Â 43â\u20ac\u009d",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: "Â 43â\u20ac\u009d",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011032",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011032",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TELEVISOR 43UJ635T LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TELEVISOR 43UJ635T LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "20W, ultra Surround, Clear voice",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "20W, ultra Surround, Clear voice",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue:
                  "(Ancho-Alto-Profundo)  97,7 cm x 57,5 cm x 8,1 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo)  97,7 cm x 57,5 cm x 8,1 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "UHD Â 3,840 Ã\u2014 2,160",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "UHD Â 3,840 Ã\u2014 2,160",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1905881.51,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1905881.51,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVISOR 43UJ635T LG",
        id: "PO_Tec7011032",
      },
    ],
    id: "PO_Tec7011032",
    href: "undefinedproductOffering/PO_Tec7011032",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "Â 49â\u20ac\u009d",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: "Â 49â\u20ac\u009d",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011044",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011044",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TELEVISOR 49UJ635T LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TELEVISOR 49UJ635T LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "20W, ultra Surround, Clear voice",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "20W, ultra Surround, Clear voice",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue: "(Ancho-Alto-Profundo) 111 cm x 65 cm x 8,1 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo) 111 cm x 65 cm x 8,1 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "UHD Â 3,840 Ã\u2014 2,160",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "UHD Â 3,840 Ã\u2014 2,160",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2087394.96,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2087394.96,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVISOR 49UJ635T LG",
        id: "PO_Tec7011044",
      },
    ],
    id: "PO_Tec7011044",
    href: "undefinedproductOffering/PO_Tec7011044",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '49"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '49"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011134",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011134",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Samsung",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Samsung",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Samsung TV UN49J5200",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "Samsung TV UN49J5200",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "Dolby digital plus 20w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "Dolby digital plus 20w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue: "(Ancho-Alto-Profundo) 111,9 x 65,0 x 7,4 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo) 111,9 x 65,0 x 7,4 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "FULL HD 1920 x 1080",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "FULL HD 1920 x 1080",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2026889.92,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2026889.92,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVISOR UN49J5200AKXZL FULL HD SAMS",
        id: "PO_Tec7011134",
      },
    ],
    id: "PO_Tec7011134",
    href: "undefinedproductOffering/PO_Tec7011134",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "AMD A6",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "AMD A6",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "21.5",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: "21.5",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011224",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011224",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Hewlet Packard",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "HewletPackard",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Gráficas AMD Radeonâ\u201e¢ R3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Gráficas AMD Radeonâ\u201e¢ R3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "AIO HP ALL-in-One 22-b201la",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "AIO HP ALL-in-One 22-b201la",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "Auriculares/microfono combinado, HDMI, E/S en la parte posterior USB 2.0, USB 3.0",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value:
                  "Auriculares/microfono combinado, HDMI, E/S en la parte posterior USB 2.0, USB 3.0",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "Â 1TB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "Â 1TB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1872000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1872000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "DESKTOP X6A16AA#ABM HP 22-B201LA HEWP",
        id: "PO_Tec7011224",
      },
    ],
    id: "PO_Tec7011224",
    href: "undefinedproductOffering/PO_Tec7011224",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "PENTIUM",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "PENTIUM",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '14,1"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '14,1"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011225",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011225",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Hewlet Packard",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "HewletPackard",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "HP Laptop 14-bs008la",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "HP Laptop 14-bs008la",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "1TB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "1TB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1404000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1404000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "LAPTOP 1GR62LA#ABM HP 14-BS008LA HEWP",
        id: "PO_Tec7011225",
      },
    ],
    id: "PO_Tec7011225",
    href: "undefinedproductOffering/PO_Tec7011225",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "Coreâ\u201e¢ i3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "Coreâ\u201e¢ i3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '14,0"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '14,0"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011226",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011226",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Hewlet Packard",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "HewletPackard",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "HP Laptop 14-bs012la",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "HP Laptop 14-bs012la",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "Â 1TB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "Â 1TB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1674000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1674000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "LAPTOP 1GR66LA#ABM HP 14-BS012LA HEWP",
        id: "PO_Tec7011226",
      },
    ],
    id: "PO_Tec7011226",
    href: "undefinedproductOffering/PO_Tec7011226",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "Coreâ\u201e¢ i5",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "Coreâ\u201e¢ i5",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: 'Â 14,0"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: 'Â 14,0"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011227",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011227",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Hewlet Packard",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "HewletPackard",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4 GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4 GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue: "HP Laptop 14-bs014la",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "HP Laptop 14-bs014la",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue:
                  "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB, USB 2.0, HDMI, VGA. Salida audio y microfono",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "Â 1TB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "Â 1TB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1980000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1980000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "LAPTOP 1GR68LA#ABM HP 14-BS014LA HEWP",
        id: "PO_Tec7011227",
      },
    ],
    id: "PO_Tec7011227",
    href: "undefinedproductOffering/PO_Tec7011227",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "7011388",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011388",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "X Box",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "XBox",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Consola Xbox One S 500 GB NEW",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "Consola Xbox One S 500 GB NEW",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "HDMI",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "HDMI",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "500 GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "500 GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "Game DVR/ Blue-ray",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Compatibilidad",
                id: "Compatibilidad",
                type: "pscmUserAttribute",
                value: "Game DVR/ Blue-ray",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Compatibilidad",
          },
          {
            versions: [
              {
                displayValue: "4k",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "4k",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue:
                  "Dos Controles, Juego Forza MotorSport 7, 3 Meses de Live y Game Pass",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Accesorios",
                id: "Accesorios",
                type: "pscmUserAttribute",
                value:
                  "Dos Controles, Juego Forza MotorSport 7, 3 Meses de Live y Game Pass",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Accesorios",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "VideoConsola",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "VideoConsola",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Equipos",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Equipos",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1845377.31,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1845377.31,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "CONSOLA XBOX ONE S 1037088 MSFT",
        id: "PO_Tec7011388",
      },
    ],
    id: "PO_Tec7011388",
    href: "undefinedproductOffering/PO_Tec7011388",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "7011667",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011667",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Play Station",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "PlayStation",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "PS4 HW 500GB 4 JUEGOS",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "PS4 HW 500GB 4 JUEGOS",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "HDMI",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "HDMI",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "500GB",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "500GB",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "Blue ray/DVD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Compatibilidad",
                id: "Compatibilidad",
                type: "pscmUserAttribute",
                value: "Blue ray/DVD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Compatibilidad",
          },
          {
            versions: [
              {
                displayValue: "4k",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "4k",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue:
                  "1 Control + 3 meses de PlayStation Plus + God of War 3 + Uncharted 4 + Horizon Zero Dawn + Call of Duty Infinite Warfare",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Accesorios",
                id: "Accesorios",
                type: "pscmUserAttribute",
                value:
                  "1 Control + 3 meses de PlayStation Plus + God of War 3 + Uncharted 4 + Horizon Zero Dawn + Call of Duty Infinite Warfare",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Accesorios",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "VideoConsola",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "VideoConsola",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Equipos",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Equipos",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1452100.84,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1452100.84,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "CONSOLA V HOLIDAY2017 PS4 SLIM 500G SONY",
        id: "PO_Tec7011667",
      },
    ],
    id: "PO_Tec7011667",
    href: "undefinedproductOffering/PO_Tec7011667",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "PENTIUM",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "PENTIUM",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '19.5"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '19.5"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011668",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011668",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lenovo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lenovo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "8Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "8Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue:
                  "Todo en Uno Lenovo Desktop IC AIO 310-20IAP Intel Pentium J4205_1.5G_4C",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value:
                  "Todo en Uno Lenovo Desktop IC AIO 310-20IAP Intel Pentium J4205_1.5G_4C",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "USB 2.0,  3.0, HDMI, lector de tarjeta",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB 2.0,  3.0, HDMI, lector de tarjeta",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "1T",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "1T",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "PC",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "PC",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1548000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1548000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "DESKTOP F0CL006ULD IC AIO 1T 8G W10 LENO",
        id: "PO_Tec7011668",
      },
    ],
    id: "PO_Tec7011668",
    href: "undefinedproductOffering/PO_Tec7011668",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "COREI-3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "COREI-3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '15.6"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '15.6"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011669",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011669",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lenovo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lenovo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue:
                  "Portatil LENOVO 320-15ISK Intel Core I3-6006U 2.0GHz _2C, 4G DDR4 2133",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value:
                  "Portatil LENOVO 320-15ISK Intel Core I3-6006U 2.0GHz _2C, 4G DDR4 2133",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "1T",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "1T",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1728000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1728000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "DESKTOP 80XH000JLM NTBK IP I3 4G 1T LENO",
        id: "PO_Tec7011669",
      },
    ],
    id: "PO_Tec7011669",
    href: "undefinedproductOffering/PO_Tec7011669",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "COREI-3",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "COREI-3",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '15.6"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '15.6"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011670",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011670",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lenovo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lenovo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue:
                  "Portatil LENOVO IP 320-15IAP Intel Core I3-6006U 2.0GHz _2C, 2TB 7MM",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value:
                  "Portatil LENOVO IP 320-15IAP Intel Core I3-6006U 2.0GHz _2C, 2TB 7MM",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "2T",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "2T",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1907999,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1907999,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "DESKTOP 80XH005PLM NTBK IP I3 4G 2T LENO",
        id: "PO_Tec7011670",
      },
    ],
    id: "PO_Tec7011670",
    href: "undefinedproductOffering/PO_Tec7011670",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "PENTIUM",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Procesador",
                id: "Procesador",
                type: "pscmUserAttribute",
                value: "PENTIUM",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Procesador",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '14"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '14"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "SistemaOperativo",
                id: "SistemaOperativo",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SistemaOperativo",
          },
          {
            versions: [
              {
                displayValue: "7011671",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011671",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Lenovo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Lenovo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "Intel HD",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Graficas",
                id: "Graficas",
                type: "pscmUserAttribute",
                value: "Intel HD",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Graficas",
          },
          {
            versions: [
              {
                displayValue: "4Gb",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Memoria",
                id: "Memoria",
                type: "pscmUserAttribute",
                value: "4Gb",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Memoria",
          },
          {
            versions: [
              {
                displayValue:
                  "Portatil LENOVO IP 320-14IAP Intel Pentium N4200 1.1GHz 4C, 4G 500G",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value:
                  "Portatil LENOVO IP 320-14IAP Intel Pentium N4200 1.1GHz 4C, 4G 500G",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "USB,USB tipo C,HDMI,LAN,RJ45, lector de memoria",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "500G",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Almacenamiento",
                id: "Almacenamiento",
                type: "pscmUserAttribute",
                value: "500G",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Almacenamiento",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Computo",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Computo",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1296000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1296000,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "DESKTOP 80XQ0032LM NTBK IP N4200 4G LENO",
        id: "PO_Tec7011671",
      },
    ],
    id: "PO_Tec7011671",
    href: "undefinedproductOffering/PO_Tec7011671",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '43"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '43"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011856",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011856",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Samsung",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Samsung",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV Samsung 43MU6103Â + barra HW-J250/ZX**",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TV Samsung 43MU6103Â + barra HW-J250/ZX**",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                displayValue: "Puerto USB; Bluetooth",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "Puerto USB; Bluetooth",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "2.2",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                value: "2.2",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "Dolby digital plus 20w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "Dolby digital plus 20w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                displayValue: "80w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                value: "80w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue: "(Ancho-Alto-Profundo) 97,5 x 56,9 x 6.2 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo) 97,5 x 56,9 x 6.2 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "UHD 3840 x 2160",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "UHD 3840 x 2160",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1890755.46,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1890755.46,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVISOR 43MU6013 UHDSMRT+SOUNDBAR SAMS",
        id: "PO_Tec7011856",
      },
    ],
    id: "PO_Tec7011856",
    href: "undefinedproductOffering/PO_Tec7011856",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: '49"',
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: '49"',
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011857",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011857",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "Samsung",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "Samsung",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV Samsung 49J5200 + barra HW-J250/ZX**",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TV Samsung 49J5200 + barra HW-J250/ZX**",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                displayValue: "Puerto USB; Bluetooth",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "Puerto USB; Bluetooth",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "2.2",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                value: "2.2",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "Dolby digital plus 20w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "Dolby digital plus 20w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                displayValue: "80w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                value: "80w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue: "(Ancho-Alto-Profundo) 111,9 x 65,0 x 7,4 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo) 111,9 x 65,0 x 7,4 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "FULL HD 1920 x 1080",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "FULL HD 1920 x 1080",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1951259.66,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 1951259.66,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVISOR 49J5200 UHDSMRT+SOUNDBAR SAMS",
        id: "PO_Tec7011857",
      },
    ],
    id: "PO_Tec7011857",
    href: "undefinedproductOffering/PO_Tec7011857",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "Â 43â\u20ac\u009d",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: "Â 43â\u20ac\u009d",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011858",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011858",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV LG 43UJ635 + Parlante OneBody ONEOM4560**",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TV LG 43UJ635 + Parlante OneBody ONEOM4560**",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                displayValue: "Puerto USB; Bluetooth",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "Puerto USB; Bluetooth",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "1.1",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                value: "1.1",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "20W, ultra Surround, Clear voice",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "20W, ultra Surround, Clear voice",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                displayValue: "220w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                value: "220w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue:
                  "(Ancho-Alto-Profundo)  97,7 cm x 57,5 cm x 8,1 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo)  97,7 cm x 57,5 cm x 8,1 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "UHD Â 3,840 Ã\u2014 2,160",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "UHD Â 3,840 Ã\u2014 2,160",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2129747.06,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2129747.06,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVIS 43UJ635 4KWEB OS TDT2+ONEBODY LG",
        id: "PO_Tec7011858",
      },
    ],
    id: "PO_Tec7011858",
    href: "undefinedproductOffering/PO_Tec7011858",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "PosibilidadFinanciamiento",
                id: "PlazoMeses",
                type: "pscmUserAttribute",
                characteristicValues: [
                  {
                    displayValue: "0 Meses",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-04-08T00:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "0",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PlazoMeses",
          },
          {
            versions: [
              {
                displayValue: "365",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "365",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Number",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "READONLY",
                  },
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                displayValue: "Â 49â\u20ac\u009d",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Pantalla",
                id: "Pantalla",
                type: "pscmUserAttribute",
                value: "Â 49â\u20ac\u009d",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Pantalla",
          },
          {
            versions: [
              {
                displayValue: "7011859",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7011859",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                displayValue: "LG",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                value: "LG",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV LG 49UJ635 + Parlante OneBody ONEOM4560**",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                value: "TV LG 49UJ635 + Parlante OneBody ONEOM4560**",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "TV analoga, Digital",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "TipoSenal",
                id: "TipoSenal",
                type: "pscmUserAttribute",
                value: "TV analoga, Digital",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TipoSenal",
          },
          {
            versions: [
              {
                displayValue: "Puerto USB; Bluetooth",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Conectividad",
                id: "Conectividad",
                type: "pscmUserAttribute",
                value: "Puerto USB; Bluetooth",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Conectividad",
          },
          {
            versions: [
              {
                displayValue: "1.1",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Canales",
                id: "Canales",
                type: "pscmUserAttribute",
                value: "1.1",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Canales",
          },
          {
            versions: [
              {
                displayValue: "Si",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Smartv",
                id: "Smartv",
                type: "pscmUserAttribute",
                value: "Si",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Smartv",
          },
          {
            versions: [
              {
                displayValue: "20W, ultra Surround, Clear voice",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Audio",
                id: "Audio",
                type: "pscmUserAttribute",
                value: "20W, ultra Surround, Clear voice",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Audio",
          },
          {
            versions: [
              {
                displayValue: "220w",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Potencia",
                id: "Potencia",
                type: "pscmUserAttribute",
                value: "220w",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Potencia",
          },
          {
            versions: [
              {
                displayValue: "(Ancho-Alto-Profundo) 111 cm x 65 cm x 8,1 cm",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "MedidaSinBase",
                id: "MedidaSinBase",
                type: "pscmUserAttribute",
                value: "(Ancho-Alto-Profundo) 111 cm x 65 cm x 8,1 cm",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MedidaSinBase",
          },
          {
            versions: [
              {
                displayValue: "UHD Â 3,840 Ã\u2014 2,160",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Resolucion",
                id: "Resolucion",
                type: "pscmUserAttribute",
                value: "UHD Â 3,840 Ã\u2014 2,160",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "Resolucion",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Is Composite ",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "OPTIONAL",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Product Technical Type",
                id: "productTechnicalType",
                type: "pscmSystemAttribute",
                value: "OPTIONAL",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "productTechnicalType",
          },
          {
            versions: [
              {
                displayValue: "Televisión",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer Type",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "Televisión",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Smartv",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "String",
                name: "Offer SubType",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Smartv",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                displayValue: "Tecnologia",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                value: "Tecnologia",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                  {
                    isSelected: true,
                    value: "SaveToSR",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                displayValue: "Sale",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
                value: "Sale",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "Boolean",
                name: "Shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-04-08T00:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        productOfferingPrices: [
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioBase",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PB",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2462520.17,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PrecioBaseTecnologia",
                id: "CT_TecPrecioBaseOTC",
                plaId: "CT_TecPrecioBaseOTC",
                popType: "PrecioBaseOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPrecioBaseOTC",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "PrecioVenta",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "TipoPrecio",
                        id: "TipoPrecio",
                        valueTypeSpecification: {
                          id: "TipoPrecio",
                        },
                        type: "infoModelSystemAttribute",
                        value: "PV",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                        ],
                      },
                    ],
                    id: "TipoPrecio",
                  },
                ],
                markup: 0,
                price: {
                  amount: 2462520.17,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "PromocionPrecioBaseTecnologia",
                id: "CT_TecPromocionPrecioBaseOTCD",
                plaId: "CT_TecPromocionPrecioBaseOTCD",
                popType: "PrecioVentaOne-Time",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionPrecioBaseOTCD",
          },
          {
            versions: [
              {
                characteristics: [
                  {
                    versions: [
                      {
                        displayValue: "Excluido",
                        validFor: {
                          startDateTime: "2020-04-08T00:00:00.000Z",
                        },
                        valueType: "CodeTable",
                        name: "ClaseImpuesto",
                        id: "ClaseImpuesto",
                        valueTypeSpecification: {
                          id: "ClaseImpuesto",
                        },
                        type: "infoModelUserAttribute",
                        value: "Excluido",
                        properties: [
                          {
                            isSelected: true,
                            value: "READONLY",
                          },
                          {
                            isSelected: true,
                            value: "SaveToSR",
                          },
                        ],
                      },
                    ],
                    id: "ClaseImpuesto",
                  },
                ],
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "IVA Tecnologia",
                id: "CT_TecTaxIVA",
                plaId: "CT_TecTaxIVA",
                popType: "ImpuestoIVA",
                frequency: "O",
              },
            ],
            id: "CT_TecTaxIVA",
          },
          {
            versions: [
              {
                markup: 0,
                price: {
                  amount: 0,
                  units: {
                    code: "COP",
                    name: "COP",
                  },
                },
                percentage: 0,
                name: "DescuentofueroPrecioBaseTecnologia",
                id: "CT_TecPromocionFueraPrecioBaseOT",
                plaId: "CT_TecPromocionFueraPrecioBaseOT",
                popType: "Discount",
                frequency: "O",
              },
            ],
            id: "CT_TecPromocionFueraPrecioBaseOT",
          },
        ],
        name: "TELEVIS 49UJ635 4KWEB OS TDT2+ONEBODY LG",
        id: "PO_Tec7011859",
      },
    ],
    id: "PO_Tec7011859",
    href: "undefinedproductOffering/PO_Tec7011859",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-06-26T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-06-26T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-06-26T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-06-26T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-06-26T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "360",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "360",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "Boolean",
                name: "isComposite",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "1",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "CLASIFICACION_FISCAL",
                id: "CLASIFICACION_FISCAL",
                type: "pscmUserAttribute",
                value: "1",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CLASIFICACION_FISCAL",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "COLOR_TEC",
                id: "COLOR_TEC",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "COLOR_TEC",
          },
          {
            versions: [
              {
                displayValue: "Combinada",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONECTIVIDAD",
                id: "CONECTIVIDAD",
                type: "pscmUserAttribute",
                value: "Combinada",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONECTIVIDAD",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONTENIDO",
                id: "CONTENIDO",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONTENIDO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONTENIDO_DE_PRODUCTO",
                id: "CONTENIDO_DE_PRODUCTO",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONTENIDO_DE_PRODUCTO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "MEMORIA_RAM",
                id: "MEMORIA_RAM",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MEMORIA_RAM",
          },
          {
            versions: [
              {
                displayValue: "Core I5",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "PROCESADOR_TEC",
                id: "PROCESADOR_TEC",
                type: "pscmUserAttribute",
                value: "Core I5",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PROCESADOR_TEC",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "SISTEMA_OPERATIVO",
                id: "SISTEMA_OPERATIVO",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SISTEMA_OPERATIVO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "TAMANO_DE_PANTALLA",
                id: "TAMANO_DE_PANTALLA",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TAMANO_DE_PANTALLA",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "RESOLUCION",
                id: "RESOLUCION",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "RESOLUCION",
          },
          {
            versions: [
              {
                displayValue: "7014223",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7014223",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "String",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "Boolean",
                name: "shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                displayValue: "COMPUTO",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "specificationSubtype",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "COMPUTO",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "specificationSubSubtype",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-06-26T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        name: "PORTATIL A315-53-5811 IC_I5 15,6PulgadasHDACER",
        id: "PO_Tec7014223",
      },
    ],
    id: "PO_Tec7014223",
    href: "undefinedproductOffering/PO_Tec7014223",
  },
  {
    versions: [
      {
        characteristics: [
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Instance State",
                id: "instance_state",
                type: "lifeCycle",
                characteristicValues: [
                  {
                    displayValue: "TERMINATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-07-01T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "TERMINATED",
                  },
                  {
                    displayValue: "SUSPENDED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-07-01T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "SUSPENDED",
                  },
                  {
                    displayValue: "NEW",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-07-01T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "NEW",
                  },
                  {
                    displayValue: "MIGRATED",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-07-01T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "MIGRATED",
                  },
                  {
                    displayValue: "ACTIVE",
                    isDefault: false,
                    validFor: {
                      startDateTime: "2020-07-01T05:00:00.000Z",
                    },
                    valueType: "CodeTable",
                    value: "ACTIVE",
                  },
                ],
                properties: [
                  {
                    isSelected: true,
                    value: "CONF",
                  },
                ],
              },
            ],
            id: "instance_state",
          },
          {
            versions: [
              {
                displayValue: "360",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "GarantiaDiasFabricante",
                id: "GarantiaDiasFabricante",
                type: "pscmUserAttribute",
                value: "360",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasFabricante",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "GarantiaDiasClaro",
                id: "GarantiaDiasClaro",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "GarantiaDiasClaro",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "ModeloTecnologia",
                id: "ModeloTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "ModeloTecnologia",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "Boolean",
                name: "isComposite",
                id: "isComposite",
                type: "pscmUserAttribute",
                value: "0",
              },
            ],
            id: "isComposite",
          },
          {
            versions: [
              {
                displayValue: "0",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "CLASIFICACION_FISCAL",
                id: "CLASIFICACION_FISCAL",
                type: "pscmUserAttribute",
                value: "0",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CLASIFICACION_FISCAL",
          },
          {
            versions: [
              {
                displayValue: "VINOTINTO",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "COLOR_TEC",
                id: "COLOR_TEC",
                type: "pscmUserAttribute",
                value: "VINOTINTO",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "COLOR_TEC",
          },
          {
            versions: [
              {
                displayValue: "Combinada",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONECTIVIDAD",
                id: "CONECTIVIDAD",
                type: "pscmUserAttribute",
                value: "Combinada",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONECTIVIDAD",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONTENIDO",
                id: "CONTENIDO",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONTENIDO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "CONTENIDO_DE_PRODUCTO",
                id: "CONTENIDO_DE_PRODUCTO",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CONTENIDO_DE_PRODUCTO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "MEMORIA_RAM",
                id: "MEMORIA_RAM",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "MEMORIA_RAM",
          },
          {
            versions: [
              {
                displayValue: "Core I5",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "PROCESADOR_TEC",
                id: "PROCESADOR_TEC",
                type: "pscmUserAttribute",
                value: "Core I5",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "PROCESADOR_TEC",
          },
          {
            versions: [
              {
                displayValue: "WINDOWS 10",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "SISTEMA_OPERATIVO",
                id: "SISTEMA_OPERATIVO",
                type: "pscmUserAttribute",
                value: "WINDOWS 10",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "SISTEMA_OPERATIVO",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "TAMANO_DE_PANTALLA",
                id: "TAMANO_DE_PANTALLA",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "TAMANO_DE_PANTALLA",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "RESOLUCION",
                id: "RESOLUCION",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "RESOLUCION",
          },
          {
            versions: [
              {
                displayValue: "7014225",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "CodigoMaterial",
                id: "CodigoMaterial",
                type: "pscmUserAttribute",
                value: "7014225",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "CodigoMaterial",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "String",
                name: "FabricanteTecnologia",
                id: "FabricanteTecnologia",
                type: "pscmUserAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "FabricanteTecnologia",
          },
          {
            versions: [
              {
                displayValue: "false",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "Boolean",
                name: "shared",
                id: "shared",
                type: "pscmSystemAttribute",
                value: "0",
              },
            ],
            id: "shared",
          },
          {
            versions: [
              {
                displayValue: "COMPUTO",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "specificationSubtype",
                id: "specificationSubtype",
                type: "pscmSystemAttribute",
                value: "COMPUTO",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "specificationSubtype",
          },
          {
            versions: [
              {
                displayValue: "Portatil",
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "specificationSubSubtype",
                id: "specificationSubSubtype",
                type: "pscmSystemAttribute",
                value: "Portatil",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "specificationSubSubtype",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Family",
                id: "family",
                type: "pscmSystemAttribute",
                properties: [
                  {
                    isSelected: true,
                    value: "TCRMFlag",
                  },
                ],
              },
            ],
            id: "family",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "Category",
                id: "category",
                type: "pscmSystemAttribute",
              },
            ],
            id: "category",
          },
          {
            versions: [
              {
                validFor: {
                  startDateTime: "2020-07-01T05:00:00.000Z",
                },
                valueType: "CodeTable",
                name: "TimeZone Type",
                id: "tariffTimeTimeZoneType",
                type: "pscmSystemAttribute",
              },
            ],
            id: "tariffTimeTimeZoneType",
          },
        ],
        name: "PORTATIL A315-55G-5927 IC_I5 4G AZL ACER",
        id: "PO_Tec7014225",
      },
    ],
    id: "PO_Tec7014225",
    href: "undefinedproductOffering/PO_Tec7014225",
  },
];
