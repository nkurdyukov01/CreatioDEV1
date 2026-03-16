define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "a8d3a946-f3f8-4f91-89b1-ff949dfbb0bd",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMe",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMe_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_4sdjmsf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_4sdjmsf_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "actions-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_76765un",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_76765un_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAvgPricd",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					},
					"items": []
				},
				"parentName": "Button_4sdjmsf",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AvgPriceButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AvgPriceButton_caption)#",
					"visible": true,
					"icon": "checkmark-filled-icon",
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					}
				},
				"parentName": "Button_4sdjmsf",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_rtokijf",
					"control": "$PDS_UsrPrice_rtokijf",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_m7oqjze",
					"control": "$PDS_UsrNumber_m7oqjze",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_q44n3tp",
					"control": "$PDS_UsrTicketPrice_q44n3tp",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrLength",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_duz1rh3",
					"control": "$PDS_UsrLength_duz1rh3",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "left",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_b2iab82",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_b2iab82",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_ewh0h04",
					"control": "$PDS_UsrCrewCount_ewh0h04",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_hi5a1oy",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_hi5a1oy",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"valueDetails": null,
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_3trok78",
					"control": "$PDS_UsrPassengersCount_3trok78",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_u78c9p9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_u78c9p9",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn15_tm0pgne",
					"control": "$PDS_UsrColumn15_tm0pgne",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_ysi3ek7",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_ysi3ek7",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_giwwmzj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_giwwmzj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtCategories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(YachtCategories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacth",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3njyol1",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3njyol1_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7hfix3e",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3njyol1",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_x0mt2cr",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7hfix3e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_213l8g2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_213l8g2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRentals",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_x0mt2cr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_fbmmhj6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_fbmmhj6_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3ye25pvDS"
						}
					}
				},
				"parentName": "FlexContainer_x0mt2cr",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_bpdo0a5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_bpdo0a5_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_x0mt2cr",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_vea2lr7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vea2lr7_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_3ye25pv"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bpdo0a5",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ulzg2oz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ulzg2oz_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_bpdo0a5",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_mqc7lai",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_mqc7lai_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_mqc7lai_GridDetail_3ye25pv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_3ye25pv"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_mqc7lai_SearchValue",
							"GridDetailSearchFilter_mqc7lai_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_x0mt2cr",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_9thlnzu",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3njyol1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3ye25pv",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": false,
							"numeration": false
						},
						"editable": {
							"enable": true,
							"floatingEditPanel": false
						},
						"columns": {
							"sorting": false,
							"resizing": false,
							"dragAndDrop": false
						}
					},
					"items": "$GridDetail_3ye25pv",
					"primaryColumnName": "GridDetail_3ye25pvDS_Id",
					"columns": [
						{
							"id": "87710c93-6585-07d5-1cd9-a844a9a3f268",
							"code": "GridDetail_3ye25pvDS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrRentalStart)#",
							"dataValueType": 8,
							"width": 151
						},
						{
							"id": "013a95b5-d46d-8b47-b37a-754d2615979d",
							"code": "GridDetail_3ye25pvDS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrRentalEnd)#",
							"dataValueType": 8,
							"width": 153
						},
						{
							"id": "fe838010-5b11-cde7-99cd-2bc17bfeab3c",
							"code": "GridDetail_3ye25pvDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "283a1316-ded5-3ed3-d185-6c555ca18f89",
							"code": "GridDetail_3ye25pvDS_UsrManager",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrManager)#",
							"dataValueType": 10,
							"width": 138
						},
						{
							"id": "deb292de-8e64-70ac-e223-0e95c29ec04c",
							"code": "GridDetail_3ye25pvDS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrTotalPrice)#",
							"dataValueType": 32,
							"width": 176
						},
						{
							"id": "d9e17dfa-80db-7359-6ca5-c23932c36666",
							"code": "GridDetail_3ye25pvDS_UsrComment",
							"caption": "#ResourceString(GridDetail_3ye25pvDS_UsrComment)#",
							"dataValueType": 28,
							"width": 179
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_9thlnzu",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_duz1rh3": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"maxValue": 5000,
									"message": "#ResourceString(LengthMustBeShorter)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_ewh0h04": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(CrewCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_b2iab82": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_b2iab82_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPrice_rtokijf": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"PriceMaxValidator": {
								"type": "usr.DGValidator",
								"params": {
									"maxValue": 100000,
									"message": "#ResourceString(PriceShouldBeLower)#"
								}
							},
							"PriceMinValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPassengersCount_3trok78": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrDriveType_hi5a1oy": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_hi5a1oy_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_u78c9p9": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_u78c9p9_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrOrder",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrColumn15_tm0pgne": {
						"modelConfig": {
							"path": "PDS.UsrColumn15"
						}
					},
					"PDS_UsrManager_ysi3ek7": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_ysi3ek7_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNumber_m7oqjze": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrTicketPrice_q44n3tp": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"GridDetail_3ye25pv": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3ye25pvDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_mqc7lai_GridDetail_3ye25pv",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_3ye25pv_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3ye25pvDS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrRentalStart"
									}
								},
								"GridDetail_3ye25pvDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrRentalEnd"
									}
								},
								"GridDetail_3ye25pvDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrCustomer"
									}
								},
								"GridDetail_3ye25pvDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrManager"
									}
								},
								"GridDetail_3ye25pvDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrTotalPrice"
									}
								},
								"GridDetail_3ye25pvDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.UsrComment"
									}
								},
								"GridDetail_3ye25pvDS_Id": {
									"modelConfig": {
										"path": "GridDetail_3ye25pvDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_3ye25pv_PredefinedFilter": {
						"value": null
					},
					"YachtCategories_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_3ye25pvDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts"
						},
						"scope": "page"
					},
					"GridDetail_3ye25pvDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_rtokijf;
					console.log("Price = " + price);
					request.$context.PDS_UsrColumn15_tm0pgne = "comment from JS code!";
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (
						request.attributeName === "PDS_UsrPrice_rtokijf" ||
						request.attributeName === "PDS_UsrPassengersCount_3trok78"
					) {
						let price = await request.$context.PDS_UsrPrice_rtokijf;
						let passengers = await request.$context.PDS_UsrPassengersCount_3trok78;
		
						if (price != null && passengers != null && passengers > 0) {
							let ticketPrice = price / passengers;
							request.$context.PDS_UsrTicketPrice_q44n3tp = ticketPrice;
						} else {
							request.$context.PDS_UsrTicketPrice_q44n3tp = null;
						}
					}
		
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
			
					if (request.attributeName === "PDS_UsrPrice_rtokijf") {
			
						const price = await request.$context.PDS_UsrPrice_rtokijf;
			
						const minPrice =
							await Terrasoft.SysSettings.querySysSettingsItem(
								"MinPriceToRequireYachtComment"
							);
					console.log("System setting MinPriceToRequireYachtComment =", minPrice);
						request.$context.PDS_Comment_isRequired =
							price > minPrice;
					}
			
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");
					
					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_hi5a1oy;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetAvgPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/DEV1/0/rest/YachtService/GetAvgPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response avg price = " + response.body.GetAvgPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let maxValue = config.maxValue;
		
						if (value === null || value === undefined || value === "") {
							return null;
						}
		
						let isMinValid = minValue === undefined || minValue === null || value >= minValue;
						let isMaxValid = maxValue === undefined || maxValue === null || value <= maxValue;
		
						let valueIsCorrect = isMinValid && isMaxValid;
		
						if (valueIsCorrect) {
							return null;
						}
		
						return {
							"usr.DGValidator": {
								message: config.message
							}
						};
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "maxValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});