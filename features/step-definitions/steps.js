const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url(`https://www.newegg.com/${page}`);
  });

When("I close the promo banner if it appears", async () => {
    try{
        const promo = await $(`//*[@id="modal-Website"]/div[2]/div/button`).waitForDisplayed({timeout: 2500});
        promo.click();
    }catch(error){
        console.error(error);
    }
});

When ("I enter the word 'Windows' in the search bar", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();

    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]').setValue('Windows');
   });

When ("I click the search", async () => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button').click();
  });

Then("I Check that at least one item appears", async () => {
    await expect($('#item_cell_32-350-881_1_0')).toBeExisting();
});

When ("I open 'Today's Best Deals' tab", async () => {
    const TodayBestDeal = await $('#trendingBanner_720202')
    await TodayBestDeal.click()
});   

When ("I click on the Internet shop logo", async () => {
    const shoplogoImage = await $('/html/body/div[13]/header/div[1]/div[1]/div[1]/div[2]/a')
    await shoplogoImage.click()
}); 

Then("I expect that the main page opened", async () => {
    await expect(browser).toHaveUrl(`https://www.newegg.com/`)
});