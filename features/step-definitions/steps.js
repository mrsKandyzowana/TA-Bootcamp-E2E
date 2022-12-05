const { Given, When, Then } = require('@wdio/cucumber-framework');
const webPage = 'https://www.newegg.com/';

Given("I am on the home page", async () => {
    await browser.url(webPage)
});

When("I close the promo banner if it appears", async () => {
    try{
        const promo = await $(`//*[@id="modal-Website"]/div[2]/div/button`).waitForDisplayed();
        promo.click();
    }catch(error){
        console.error(error);
    }
});

When ("I enter the word {word} in the search bar", async (word) => {
    const searchIcon = await $(`.header2021-search-button`)
    const searchInput =  await $(`input[type="search"]`) 
    await searchIcon.click()
    await searchInput.setValue(word)

});

When ("I click the search", async () => {
    await $('//button[contains(., "Search")]').click();
  });

Then("I Check that at least one item appears", async () => {
    await expect($(`.item-cell`)).toBeExisting();
});

When ("I open 'Today's Best Deals' tab", async () => {
    const TodayBestDeal = await $(`//*[@id="Portals_swiper"]/div/div[1]/div[2]`)
    await TodayBestDeal.click()
});   

When ("I click on the Internet shop logo", async () => {
    const shoplogoImage = await $(`//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]`)
    await shoplogoImage.click()
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});
