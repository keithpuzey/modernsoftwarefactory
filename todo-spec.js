describe('CDBU Modern Software Factory UI Test - xxx Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://<preprod_url>');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});