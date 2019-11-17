package com.myca.nestor.tests.provider.generic.patientRecord;

import static org.junit.Assert.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.myca.alfred.redqueen.RedQueenDTO;
import com.myca.alfred.redqueen.RedQueenHelper;
import com.myca.alfred.utils.enums.Ethnicity;
import com.myca.alfred.utils.enums.GenderType;
import com.myca.alfred.utils.enums.IdentifierType;
import com.myca.alfred.utils.enums.Language;
import com.myca.alfred.utils.enums.LoginUserType;
import com.myca.alfred.utils.enums.MaritalStatus;
import com.myca.alfred.utils.enums.MarketConfigurations;
import com.myca.alfred.utils.enums.PatientRelationship;
import com.myca.alfred.utils.enums.Privilege;
import com.myca.alfred.utils.enums.PrivilegeLevel;
import com.myca.alfred.utils.enums.Race;
import com.myca.alfred.utils.enums.TaskType;
import com.myca.alfred.utils.functions.DbQuery;
import com.myca.alfred.utils.functions.MarketUtils;
import com.myca.alfred.utils.objects.CreditCardDTO;
import com.myca.alfred.utils.objects.DateDisplayFormat;
import com.myca.alfred.utils.objects.VisitDTO;
import com.myca.client.Constants;
import com.myca.client.enums.Action;
import com.myca.client.enums.ContactMethod;
import com.myca.client.enums.PlanStatus;
import com.myca.client.enums.PlanType;
import com.myca.client.enums.VisitType;
import com.myca.client.helper.MembershipServiceHelper;
import com.myca.client.helper.VisitNoteHelper;
import com.myca.client.helper.api.dto.AuditLogSearchDTO;
import com.myca.client.helper.rest.AdminServiceRestHelper;
import com.myca.client.helper.rest.AuditLogServiceRestHelper;
import com.myca.client.helper.rest.ElectronicNoteServiceRestHelper;
import com.myca.client.helper.rest.PatientServiceRestHelper;
import com.myca.client.helper.rest.PrecautionServiceRestHelper;
import com.myca.client.helper.rest.dto.AppointmentDTO;
import com.myca.client.helper.rest.dto.AuditLogDTO;
import com.myca.client.helper.rest.dto.CommonPatientBasicInfoDto;
import com.myca.client.helper.rest.dto.PatientPrecautionDTO;
import com.myca.client.helper.rest.dto.PatientPrimaryProviderDTO;
import com.myca.client.helper.rest.dto.PatientProfileDTO;
import com.myca.client.helper.rest.dto.UserCredentialDTO;
import com.myca.client.helper.rest.dto.VisitNoteDTO;
import com.myca.client.helper.rest.membership.dto.PlanDTO;
import com.myca.jarvis.base.Data;
import com.myca.jarvis.base.Tools;
import com.myca.jarvis.utils.WebdriverTasks;
import com.myca.nestor.elements.common.DocumentationSectionElement;
import com.myca.nestor.elements.common.table.Cell;
import com.myca.nestor.elements.common.table.Row;
import com.myca.nestor.pages.common.AddEditRelationPopupPage;
import com.myca.nestor.pages.common.AppointmentPatientCardPage;
import com.myca.nestor.pages.common.AppointmentStatusPopup;
import com.myca.nestor.pages.common.BootBoxPopupPage;
import com.myca.nestor.pages.common.CancelAppointmentsPopupPage;
import com.myca.nestor.pages.common.CreateTaskPopupPage;
import com.myca.nestor.pages.common.CreditCardPopupPage;
import com.myca.nestor.pages.common.IdentityValidationPopupPage;
import com.myca.nestor.pages.common.PatientCardPage;
import com.myca.nestor.pages.common.PatientPrecautionsPage;
import com.myca.nestor.pages.common.scheduling.AppointmentPage;
import com.myca.nestor.pages.login.LoginPage;
import com.myca.nestor.pages.provider.AuditLogPopupPage;
import com.myca.nestor.pages.provider.ProviderOverviewPage;
import com.myca.nestor.pages.provider.ProviderPanelPage;
import com.myca.nestor.pages.provider.patientRecord.PatientAddVisitNotePopup;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordAssessmentsPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordCarePlansPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordDemographicsPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordDocumentationPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordResultTrendsPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordNavigationPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordPatientCardMenuPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordPatientCardPage;
import com.myca.nestor.pages.provider.patientRecord.PatientRecordVisitsPage;
import com.myca.nestor.tests.provider.generic.OverviewGeneric;
import com.myca.nestor.tests.provider.generic.PanelGenericHelper;
import com.myca.nestor.utils.AppointmentHelper;
import com.myca.nestor.utils.CreditCardHelper;
import com.myca.nestor.utils.PatientRecordHelper;
import com.myca.nestor.utils.validations.PanelValidations;
import com.myca.nestor.utils.validations.ValidationFunctions;

import si.myca.com.DocDataType;
import si.myca.com.adminservice.AdminPersonSearchDTO;

public class PatientRecordGeneric {

	private static Logger logger = LoggerFactory.getLogger(PatientRecordGeneric.class);

	// ********************************************* Section Patient Health Record/Identity Validation*****************************************/

        public static void HH13699_AusPostcode() throws Throwable {
            RedQueenDTO red = new RedQueenDTO().createDefaultClinicDoc().addValidatedPatient();

            ProviderOverviewPage pop = (ProviderOverviewPage) LoginPage.login(red.getDocInfo().getUsername(), null);

            PatientRecordDemographicsPage prdp = PatientRecordHelper.openPatientRecordDemographics(pop, red.getPtInfo().getFirstname());
            prdp.toggleContactInfo(true);

            final String postcodeAUS = "1234";

            prdp.getCountry().selectByContainingText("Australia");
            prdp.getZip().clear();
            prdp.getZip().sendKeys("333");
            prdp.saveContactInfo();
            ValidationFunctions.validateErrorMessage(prdp.getZip(), "This value is invalid");

            prdp.getZip().clear();
            prdp.getZip().sendKeys(postcodeAUS);

            prdp.saveContactInfo();

            prdp.clickVisitsSection();
            prdp.clickDemographics();
            WebdriverTasks.waitWhileElementAttribute(prdp.getZip(), "value", "");

            assertEquals(postcodeAUS, prdp.getZip().getAttribute("value"));

            pop.clickNavLogout();
        }

        public static void HH13699_USAzipCode() throws Throwable {
            RedQueenDTO red = new RedQueenDTO().createDefaultClinicDoc().addValidatedPatient();

            ProviderOverviewPage pop = (ProviderOverviewPage) LoginPage.login(red.getDocInfo().getUsername(), null);

            PatientRecordDemographicsPage prdp = PatientRecordHelper.openPatientRecordDemographics(pop, red.getPtInfo().getFirstname());
            prdp.toggleContactInfo(true);

            final String zipCodeUSA = "04605";

            prdp.getCountry().selectByContainingText("United States");
            prdp.getZip().clear();
            prdp.getZip().sendKeys("4329");
            prdp.saveContactInfo();
            ValidationFunctions.validateErrorMessage(prdp.getZip(), "This value is invalid");

            prdp.getZip().clear();
            prdp.getZip().sendKeys(zipCodeUSA);

            prdp.saveContactInfo();

            prdp.clickVisitsSection();
            prdp.clickDemographics();
            WebdriverTasks.waitWhileElementAttribute(prdp.getZip(), "value", "");

            assertEquals(zipCodeUSA, prdp.getZip().getAttribute("value"));

            pop.clickNavLogout();
        }

        public static void HH13699_CanadaPostcode() throws Throwable {
            RedQueenDTO red = new RedQueenDTO().createDefaultClinicDoc().addValidatedPatient();

            ProviderOverviewPage pop = (ProviderOverviewPage) LoginPage.login(red.getDocInfo().getUsername(), null);

            PatientRecordDemographicsPage prdp = PatientRecordHelper.openPatientRecordDemographics(pop, red.getPtInfo().getFirstname());
            prdp.toggleContactInfo(true);

            final String postcodeCAN = "G1T 2C5";

            prdp.getCountry().selectByContainingText("Canada");
            prdp.getZip().clear();
            prdp.getZip().sendKeys("90210");
            prdp.saveContactInfo();
            ValidationFunctions.validateErrorMessage(prdp.getZip(), "This value is invalid");

            prdp.getZip().clear();
            prdp.getZip().sendKeys(postcodeCAN);

            prdp.saveContactInfo();

            prdp.clickVisitsSection();
            prdp.clickDemographics();
            WebdriverTasks.waitWhileElementAttribute(prdp.getZip(), "value", "");

            assertEquals(postcodeCAN, prdp.getZip().getAttribute("value"));

            pop.clickNavLogout();
        }

        public static void HH13699_otherPostcode() throws Throwable {
            RedQueenDTO red = new RedQueenDTO().createDefaultClinicDoc().addValidatedPatient();

            ProviderOverviewPage pop = (ProviderOverviewPage) LoginPage.login(red.getDocInfo().getUsername(), null);

            PatientRecordDemographicsPage prdp = PatientRecordHelper.openPatientRecordDemographics(pop, red.getPtInfo().getFirstname());
            prdp.toggleContactInfo(true);

            final String postcode = "4329";

            prdp.getCountry().selectByContainingText("Palau");
            prdp.getZip().clear();
            prdp.getZip().sendKeys(postcode);
            prdp.saveContactInfo();

            prdp.clickVisitsSection();
            prdp.clickDemographics();
            WebdriverTasks.waitWhileElementAttribute(prdp.getZip(), "value", "");

            assertEquals(postcode, prdp.getZip().getAttribute("value"));

            pop.clickNavLogout();
        }
    }