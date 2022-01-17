sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sm.CV.controller.Main", {
		onInit: function () {

			this.getView().setModel(
				new JSONModel({
					Applications: [
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/Schedule.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/PaintPlan1.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/PaintPlan2.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/ColorWorking.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/PaintPlanningMerge.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/Set.png",
						jQuery.sap.getModulePath("com.sm.CV.assets") + "/Sewing.png"
					],
					Certifications: [{
						Certification: "Introduction To ABAP In The Cloud",
						Date: "September 2021",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png",
						URL: "https://open.sap.com/verify/xilap-vilyz-tovud-zoryz-cabyt"
					}, {
						Certification: "SAP Business Technology Platform In A Nutshell",
						Date: "July 2021",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png",
						URL: "https://open.sap.com/verify/xemis-sanof-satih-zybop-vakun"
					}, {
						Certification: "JavaScript - The Complete Guide",
						Date: "March 2021",
						Logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
						URL: "https://www.udemy.com/certificate/UC-39701ce3-12e8-4d67-b806-396dee9e3adf/"
					}, {
						Certification: "Bilgi Teknolojilerine Giriş",
						Date: "December 2020",
						Logo: "https://assets-btkakademi-gov-tr.akamaized.net/api/service/v1/public/51/assets/logo.png?ts=1638534743546"
					}, {
						Certification: "CS50: Introduction To Computer Science",
						Date: "December 2020",
						Logo: "https://images-na.ssl-images-amazon.com/images/I/61rDerYyLxL.png"
					}, {
						Certification: "Flutter & Dart - The Complete Guide",
						Date: "December 2020",
						Logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
						URL: "https://www.udemy.com/certificate/UC-e9aa2e7d-d43e-4874-a024-383bde7693d4/"
					}, {
						Certification: "Building Apps with the ABAP RESTful Application Programming Model",
						Date: "November 2020",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png",
						URL: "https://open.sap.com/verify/xuvem-hafig-lohap-culug-keref"
					}, {
						Certification: "The Complete JavaScript Course",
						Date: "September 2020",
						Logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
						URL: "https://www.udemy.com/certificate/UC-0c5c583a-41ea-4dd8-bc37-35f4b8c3a156/"
					}, {
						Certification: "SAP Fiori Overview: Design, Develop and Deploy",
						Date: "July 2020",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png",
						URL: "https://open.sap.com/verify/xokih-vinab-humyk-tinar-sakuv"
					}, {
						Certification: "Evolved Web Apps with SAPUI5",
						Date: "November 2019",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png"
					}, {
						Certification: "Developing Web Apps with SAPUI5",
						Date: "March 2019",
						Logo: "https://www.suse.com/c/wp-content/uploads/2021/12/openSAP-logo.png"
					}, {
						Certification: "SAP ABAP Programming",
						Date: "July 2018",
						Logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
					}, {
						Certification: "Introduction to Cybersecurity",
						Date: "September 2016",
						Logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/220px-Cisco_logo_blue_2016.svg.png"
					}, {
						Certification: "Computer Programming Technique",
						Date: "June 2014",
						Logo: "https://www.iskur.gov.tr/assets/img/logo.png"
					}],
					Description: "Software Engineer / Full-Stack Developer",
					Education: [{
						Licence: "Computer Engineering",
						University: "İstanbul University",
						GPA: "2.96"
					}],
					Experience: {
						Positions: [{
							ID: "0",
							Position: 0,
							Icon: "sap-icon://employee",
							Date: "July '18 - Aug '18"
						}, {
							ID: "1",
							Position: 1,
							Icon: "sap-icon://employee",
							Date: "Sept '18 - Febr '20"
						}, {
							ID: "2",
							Position: 2,
							Icon: "sap-icon://employee",
							Date: "March '20 - March '21"
						}, {
							ID: "3",
							Position: 3,
							Icon: "sap-icon://employee",
							Date: "March '21 - Present"
						}],
						Details: [{
							ID: "3",
							Lane: "3",
							Company: "NTT DATA Business Solutions Turkey",
							Date: "March 2021 - Present",
							Photo: jQuery.sap.getModulePath("com.sm.CV.assets") + "/Nttdata.png",
							Position: "Senior UI Developer",
							Role: "SAP Full-Stack Developer"
						}, {
							ID: "2",
							Lane: "2",
							Children: [3],
							Company: "Itelligence Turkey",
							Date: "March 2020 - March 2021",
							Photo: jQuery.sap.getModulePath("com.sm.CV.assets") + "/Itelligence.png",
							Position: "UI Developer",
							Role: "SAP Full-Stack Developer"
						}, {
							ID: "1",
							Lane: "1",
							Children: [2],
							Company: "SPRO Technology",
							Date: "September 2018 - February 2020",
							Photo: jQuery.sap.getModulePath("com.sm.CV.assets") + "/Spro.png",
							Position: "SAP Developer",
							Role: "SAP Full-Stack Developer"
						}, {
							ID: "0",
							Lane: "0",
							Children: [1],
							Company: "SPRO Technology",
							Date: "July 2018 - August 2018",
							Photo: jQuery.sap.getModulePath("com.sm.CV.assets") + "/Spro.png",
							Position: "Intern",
							Role: "SAP ABAP Developer"
						}]
					},
					Languages: [{
						Language: "Turkish",
						Degree: 5
					}, {
						Language: "English",
						Degree: 3
					}],
					Location: "Istanbul, Turkey",
					Mail: "serhatmercan94@gmail.com",
					Name: "Serhat Mercan",
					Phone: "+9005396438728",
					Photo: jQuery.sap.getModulePath("com.sm.CV.assets") + "/Photo.jpg",
					Projects: [{
						Type: "Implementation",
						Detail: [{
							Name: "Mobile WM",
							Firm: "Aktül Kağıt / Sakarya / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "June 2019 - August 2019"
						}, {
							Name: "Mavi America & Canada Consultancy",
							Firm: "Mavi / Istanbul / Turkey",
							Role: "SAP Fiori Developer",
							Date: "April 2020 - August 2020"
						}, {
							Name: "Ekoten Fabrics Consultancy Agreement",
							Firm: "Ekoten Fabrics / İzmir / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "April 2020 - April 2021"
						}, {
							Name: "Sun Fabrics Consultancy Agreement",
							Firm: "Sun Fabrics / İzmir / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "April 2021 - Present"
						}]
					}, {
						Type: "Migration",
						Detail: [{
							Name: "Full Cycle S/4 HANA",
							Firm: "Aktül Kağıt / Sakarya / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "June 2019 - March 2020"
						}]
					}, {
						Type: "Research & Development",
						Detail: [{
							Name: "Mobile QM",
							Firm: "SPRO Technology / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "June 2019 - March 2020"
						}, {
							Name: "Invoice Approving",
							Firm: "SPRO Technology / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "August 2019 - March 2020"
						}, {
							Name: "Retail Store",
							Firm: "SPRO Technology / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "September 2019 - March 2020"
						}, {
							Name: "PM Mobility",
							Firm: "Itelligence Turkey / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "December 2020 - March 2021"
						}]
					}, {
						Type: "Roll Out",
						Detail: [{
							Name: "Mobile Barcode",
							Firm: "RMK Marine / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "November 2018 - March 2019"
						}, {
							Name: "Mobile PM",
							Firm: "Senpiliç / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "December 2019 - January 2020"
						}]
					}, {
						Type: "Support",
						Detail: [{
							Firm: "Çelik Motor / İstanbul / Turkey",
							Role: "SAP ABAP Developer",
							Date: "November 2018 - March 2020"
						}, {
							Firm: "Gratis / İstanbul / Turkey",
							Role: "SAP ABAP Developer",
							Date: "November 2018 - March 2020"
						}, {
							Firm: "Dydo Drinco / İstanbul / Turkey",
							Role: "SAP ABAP Developer",
							Date: "April 2019 - March 2020"
						}, {
							Firm: "Dalgakıran / İstanbul / Turkey",
							Role: "SAP ABAP Developer",
							Date: "July 2019 - March 2020"
						}, {
							Firm: "Duran Doğan / İstanbul / Turkey",
							Role: "SAP ABAP Developer",
							Date: "August 2019 - March 2020"
						}, {
							Firm: "Gediz Elektrik / İzmir / Turkey",
							Role: "SAP ABAP Developer",
							Date: "September 2019 - March 2020"
						}, {
							Firm: "Şenpiliç / Sakarya / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "November 2019 - March 2020"
						}, {
							Name: "Bilkent Holding ERP 2018",
							Firm: "Bilkent Holding / Ankara / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "March 2020 - March 2020"
						}, {
							Name: "Yıldırım Holding - Yılmaden S/4 Hana ERP",
							Firm: "Yıldırım Holding / İstanbul / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "March 2020 - March 2020"
						}, {
							Name: "Azersun S/4 Hana Consultancy",
							Firm: "Azersun / Azerbaijan",
							Role: "SAP Fiori + UI5 Developer",
							Date: "March 2020 - March 2020"
						}, {
							Firm: "Tezol Kağıt / İzmir / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "March 2020 - April 2020"
						}, {
							Name: "Diler Holding S/4 Hana Conversion",
							Firm: "Diler Holding / İstanbul / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "April 2020 - April 2020"
						}, {
							Name: "Mavi S/4 Hana ERP",
							Firm: "Mavi / İstanbul / Turkey",
							Role: "SAP Fiori + UI5 Developer",
							Date: "April 2020 - April 2020"
						}, {
							Name: "PM Mobility",
							Firm: "Daimler AG / İstanbul / Turkey",
							Role: "SAP ABAP + Fiori + UI5 Developer",
							Date: "January 2021 - November 2021"
						}]
					}],
					Skills: [{
						Skill: "JavaScript",
						Statu: "Success"
					}, {
						Skill: "SAP ABAP",
						Statu: "Success"
					}, {
						Skill: "SAP Fiori",
						Statu: "Success"
					}, {
						Skill: "SAP Netweaver",
						Statu: "Success"
					}, {
						Skill: "SAP UI5 Framework",
						Statu: "Success"
					}, {
						Skill: "Git",
						Statu: "Warning"
					}, {
						Skill: "GitHub",
						Statu: "Warning"
					}, {
						Skill: "OData",
						Statu: "Warning"
					}, {
						Skill: "JSON",
						Statu: "Warning"
					}, {
						Skill: "OOP",
						Statu: "Warning"
					}, {
						Skill: "SQL",
						Statu: "Warning"
					}, {
						Skill: "Web Service",
						Statu: "Warning"
					}, {
						Skill: "UX",
						Statu: "Warning"
					}, {
						Skill: "XML",
						Statu: "Warning"
					}],
					Summary: "I am experience in technical design, developing, implementation, testing and support within Mobile Application Development, SAP Fiori Development, SAP Net Weaver Gateway, SAP Back - End Server and SAP ABAP. I am an experienced, driven and analytical thinking software engineer who can achieve individually as well in team high standards. I have plenty of social and communicative skills to work in a pleasant team environment.",
					Title: "Senior UI Developer"
				}), "CV");

			this.onGenerateSkills();
			this.onGenerateApplications();

			this.byId("idPFExperience").zoomIn();
		},

		onGenerateSkills: function () {
			const oFBSkills = this.byId("idFBSkills");

			this.getView().getModel("CV").getProperty("/Skills").forEach(oSkill => {
				oFBSkills.addItem(new sap.m.GenericTag({
					design: "StatusIconHidden",
					text: oSkill.Skill,
					status: oSkill.Statu
				}));
			});
		},

		onGenerateApplications: function () {
			const oCarouselExtra = this.byId("idApplication");

			this.getView().getModel("CV").getProperty("/Applications").forEach((sApplication, iIndex) => {
				oCarouselExtra.addPage(new sap.m.Image({
					src: sApplication
				}));
			});
		},

		onPressGT: function (oEvent) {
			const sPath = this.getView().getModel("CV").getProperty(oEvent.getSource().getBindingContext("CV").getPath() + "/URL");

			if (sPath) {
				window.open(sPath, "_blank");
			}
		},

		onPressGitHub: function () {
			window.open("https://github.com/serhatmercan", "_blank");
		},

		onPressLinkedin: function () {
			window.open("https://www.linkedin.com/in/serhat-mercan/", "_blank");
		},

		TOS: function (oEvent) {
			const oTreeTable = oEvent.getSource();
			const iRowCount = oTreeTable.getVisibleRowCount();
			const iSelectedRowCount = this.getView().getModel("CV").getProperty(oEvent.getParameter("rowContext").getPath() + "/Detail").length;

			oEvent.getParameter("expanded") ?
				oTreeTable.setVisibleRowCount(iRowCount + iSelectedRowCount) :
				oTreeTable.setVisibleRowCount(iRowCount - iSelectedRowCount);
		}

	});
});