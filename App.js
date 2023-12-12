import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./app/screens/Home";
import CareProviders from "./app/screens/CareProviders";
import CheckupsAndImmunizations from "./app/screens/CheckupsAndImmunizations";
import CheckupsJPG from "./app/screens/CheckupsJPG";
import ContactUs from "./app/screens/ContactUs";
import DosageCharts from "./app/screens/DosageCharts";
import Financial from "./app/screens/Iframes/Financial";
import Locations from "./app/screens/Locations";
import RequestAnAppointment from "./app/screens/RequestAnAppointment";
import PatientPortal from "./app/screens/Iframes/PatientPortal";
import PayBill from "./app/screens/Iframes/PayBill";
import SymptomAdvisor from "./app/screens/Iframes/SymptomAdvisor";
import Resources from "./app/screens/Resources";
import AppointmentInfo from "./app/screens/Iframes/Resources/AppointmentInfo";
import CheckupInfo from "./app/screens/Iframes/Resources/CheckupInfo";
import EmergencyInfo from "./app/screens/Iframes/Resources/EmergencyInfo";
import FormsAndPolicies from "./app/screens/Iframes/Resources/FormsAndPolicies";
import ImmunizationSchedule from "./app/screens/Iframes/Resources/ImmunizationSchedule";
import PatientPortalFAQ from "./app/screens/Iframes/Resources/PatientPortalFAQ";
import PaymentOptions from "./app/screens/Iframes/Resources/PaymentOptions";
import Services from "./app/screens/Services";
import HospitalCare from "./app/screens/Iframes/Services/HospitalCare";
import NewbornCare from "./app/screens/Iframes/Services/NewbornCare";
import PediatricCare from "./app/screens/Iframes/Services/PediatricCare";
import Adolescent from "./app/screens/Iframes/Services/Adolescent";
import XRay from "./app/screens/Iframes/Services/XRay";
import Sleep from "./app/screens/Iframes/Services/Sleep";
import LaboratoryTesting from "./app/screens/Iframes/Services/LaboratoryTesting";
import DothanPedContact from "./app/screens/Iframes/RequestAnAppointment/DothanPedContact";
import DothanSubContact from "./app/screens/Iframes/RequestAnAppointment/DothanSubContact";
import EnterprisePedContact from "./app/screens/Iframes/RequestAnAppointment/EnterprisePedContact";
import EufaulaPedContact from "./app/screens/Iframes/RequestAnAppointment/EufaulaPedContact";
import OzarkPedContact from "./app/screens/Iframes/RequestAnAppointment/OzarkPedContact";
import DothanPedContactForLocations from "./app/screens/Iframes/Locations/DothanPedContactForLocations";
import DothanSubContactForLocations from "./app/screens/Iframes/Locations/DothanSubContactForLocations";
import EnterprisePedContactForLocations from "./app/screens/Iframes/Locations/EnterprisePedContactForLocations";
import EufaulaPedContactForLocations from "./app/screens/Iframes/Locations/EufaulaPedContactForLocations";
import OzarkPedContactForLocations from "./app/screens/Iframes/Locations/OzarkPedContactForLocations";
import DothanPedCareProviders from "./app/screens/Iframes/CareProviders/DothanPedCareProviders";
import DothanSubCareProviders from "./app/screens/Iframes/CareProviders/DothanSubCareProviders";
import EnterprisePedCareProviders from "./app/screens/Iframes/CareProviders/EnterprisePedCareProviders";
import EufaulaPedCareProviders from "./app/screens/Iframes/CareProviders/EufaulaPedCareProviders";
import OzarkPedCareProviders from "./app/screens/Iframes/CareProviders/OzarkPedCareProviders";
import DothanPedContactUs from "./app/screens/Iframes/ContactUs/DothanPedContactUs";
import DothanSubContactUs from "./app/screens/Iframes/ContactUs/DothanSubContactUs";
import EnterprisePedContactUs from "./app/screens/Iframes/ContactUs/EnterprisePedContactUs";
import EufaulaPedContactUs from "./app/screens/Iframes/ContactUs/EufaulaPedContactUs";
import OzarkPedContactUs from "./app/screens/Iframes/ContactUs/OzarkPedContactUs";
import AboutUs from "./app/screens/AboutUs";
import Forms from "./app/screens/Iframes/Forms";
import News from "./app/screens/Iframes/News";
import Appointments from "./app/screens/Iframes/Appointments";
import DothanProv from "./app/screens/Iframes/AboutUs/DothanProv";
import DothanSubProv from "./app/screens/Iframes/AboutUs/DothanSubProv";
import OzarkProv from "./app/screens/Iframes/AboutUs/OzarkProv";
import EufaulaProv from "./app/screens/Iframes/AboutUs/EufaulaProv";
import EnterpriseProv from "./app/screens/Iframes/AboutUs/EnterpriseProv";
import Search from "./app/screens/Search/Search";

import SearchAboutUs from "./app/screens/Search/ResultScreens/SearchAboutUs";
import SearchAppointments from "./app/screens/Search/ResultScreens/SearchAppointments";
import SearchCheckupsImmunizations from "./app/screens/Search/ResultScreens/SearchCheckupsImmunizations";
import SearchContactUs from "./app/screens/Search/ResultScreens/SearchContactUs";
import SearchDosageCharts from "./app/screens/Search/ResultScreens/SearchDosageCharts";
import SearchFinancial from "./app/screens/Search/ResultScreens/SearchFinancial";
import SearchForms from "./app/screens/Search/ResultScreens/SearchForms";
import SearchNews from "./app/screens/Search/ResultScreens/SearchNews";
import SearchPatientPortal from "./app/screens/Search/ResultScreens/SearchPatientPortal";
import SearchServices from "./app/screens/Search/ResultScreens/SearchServices";
import SearchSymptomAdvisor from "./app/screens/Search/ResultScreens/SearchSymptomAdvisor";

const Navigator = createStackNavigator({
  Home: { screen: Home },

  DosageCharts: { screen: DosageCharts },
  Financial: { screen: Financial },
  CheckupsAndImmunizations: { screen: CheckupsAndImmunizations },
  CheckupsJPG: { screen: CheckupsJPG },
  PatientPortal: { screen: PatientPortal },
  PayBill: { screen: PayBill },
  SymptomAdvisor: { screen: SymptomAdvisor },
  Forms: { screen: Forms },
  News: { screen: News },

  AboutUs: { screen: AboutUs },
  DothanProv: { screen: DothanProv },
  DothanSubProv: { screen: DothanSubProv },
  OzarkProv: { screen: OzarkProv },
  EufaulaProv: { screen: EufaulaProv },
  EnterpriseProv: { screen: EnterpriseProv },

  Appointments: { screen: Appointments },
  Financial: { screen: Financial },

  Resources: { screen: Resources },
  AppointmentInfo: { screen: AppointmentInfo },
  CheckupInfo: { screen: CheckupInfo },
  EmergencyInfo: { screen: EmergencyInfo },
  FormsAndPolicies: { screen: FormsAndPolicies },
  ImmunizationSchedule: { screen: ImmunizationSchedule },
  PatientPortalFAQ: { screen: PatientPortalFAQ },
  PaymentOptions: { screen: PaymentOptions },

  Services: { screen: Services },
  HospitalCare: { screen: HospitalCare },
  NewbornCare: { screen: NewbornCare },
  PediatricCare: { screen: PediatricCare },
  Adolescent: { screen: Adolescent },
  XRay: { screen: XRay },
  Sleep: { screen: Sleep },
  LaboratoryTesting: { screen: LaboratoryTesting },

  RequestAnAppointment: { screen: RequestAnAppointment },
  DothanPedContact: { screen: DothanPedContact },
  DothanSubContact: { screen: DothanSubContact },
  EnterprisePedContact: { screen: EnterprisePedContact },
  EufaulaPedContact: { screen: EufaulaPedContact },
  OzarkPedContact: { screen: OzarkPedContact },

  Locations: { screen: Locations },
  DothanPedContactForLocations: { screen: DothanPedContactForLocations },
  DothanSubContactForLocations: { screen: DothanSubContactForLocations },
  EnterprisePedContactForLocations: {
    screen: EnterprisePedContactForLocations,
  },
  EufaulaPedContactForLocations: { screen: EufaulaPedContactForLocations },
  OzarkPedContactForLocations: { screen: OzarkPedContactForLocations },

  CareProviders: { screen: CareProviders },
  DothanPedCareProviders: { screen: DothanPedCareProviders },
  DothanSubCareProviders: { screen: DothanSubCareProviders },
  EnterprisePedCareProviders: {
    screen: EnterprisePedCareProviders,
  },
  EufaulaPedCareProviders: { screen: EufaulaPedCareProviders },
  OzarkPedCareProviders: { screen: OzarkPedCareProviders },

  ContactUs: { screen: ContactUs },
  DothanPedContactUs: { screen: DothanPedContactUs },
  DothanSubContactUs: { screen: DothanSubContactUs },
  EnterprisePedContactUs: { screen: EnterprisePedContactUs },
  EufaulaPedContactUs: { screen: EufaulaPedContactUs },
  OzarkPedContactUs: { screen: OzarkPedContactUs },

  Search: { screen: Search },
  SearchAboutUs: { screen: SearchAboutUs },
  SearchAppointments: { screen: SearchAppointments },
  SearchCheckupsImmunizations: { screen: SearchCheckupsImmunizations },
  SearchContactUs: { screen: SearchContactUs },
  SearchDosageCharts: { screen: SearchDosageCharts },
  SearchFinancial: { screen: SearchFinancial },
  SearchForms: { screen: SearchForms },
  SearchNews: { screen: SearchNews },
  SearchPatientPortal: { screen: SearchPatientPortal },
  SearchServices: { screen: SearchServices },
  SearchSymptomAdvisor: { screen: SearchSymptomAdvisor },
},
{
  headerMode: 'none',
});

const App = createAppContainer(Navigator);

export default App;
