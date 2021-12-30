import { Product } from 'src/product';

export class MockCartService {
    getProducts(): Product[] {
        return [
            {
                id: 1,
                name: 'Selenium',
                price: 10,
                quantity: 1,
                status: 'in Stock',
                description: 'this course help us to understand automation testing',
                imgaddress : 'https://rahulshettyacademy.com/rs_admin/public/images/courses/selenium-webdriver-with-java-basics-advanced-interview-guide_1591014934_selenium.jpg'
              },
              {
                id: 2,
                name: 'Appium',
                price: 20,
                quantity: 1,
                status: '2 left',
                description: 'this course help us to understand automation testing',
                imgaddress : 'https://rahulshettyacademy.com/rs_admin/public/images/courses/cypress-modern-automation-testing-from-scratch-framework_1609261074_azure.jpg'
              },
              {
                id: 3,
                name: 'Devops',
                price: 30,
                quantity: 1,
                status: '4 left',
                description: 'this course help us to understand automation testing',
                imgaddress : 'https://rahulshettyacademy.com/rs_admin/public/images/courses/webservices-rest-api-testing-with-soapui_1591015296_soapui.jpg'
              }
        ] as Product[];
    }
}
