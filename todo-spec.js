describe('CDBU Modern Software Factory UI Test - PILOT Environment', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://raffle-pilot.eu-west-1.elasticbeanstalk.com/');
    element(by.css('[name="Name"]')).sendKeys('Selenium Test User');
    element(by.buttonText('Submit')).click();
    });
});
