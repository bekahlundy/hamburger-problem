The purpose of the application is to help a fictitious company called Bill’s Burgers to manage

their process of selling hamburgers. Our application will help Bill to select types of burgers,

some of the additional items (additions) to be added to the burgers and pricing.

We want to create a base hamburger, but also two other types of hamburgers that are popular

ones in Bill’s store.

The basic hamburger should have the following items.

1. bread roll type,

2. meat, and

3. up to 4 additional additions (things like lettuce, tomato, carrot, etc) that the customer can

select to be added to the burger.

a. Each one of these items gets charged an additional price so you need some way

to track how many items got added and to calculate the price (for the base burger

and all the additions).

This burger has a base price and the additions are all separately priced.

Create a Hamburger class to deal with all the above.

The constructor should only include the roll type, meat and price.

Also create two extra varieties of Hamburgers (classes) to cater for

a) Healthy burger (on a brown rye bread roll), plus two additional items can be added. The

healthy burger can have a total of 6 items (Additions) in total. hint: you probably want to

process the 2 additional items in this new class, not the base class, since the 2 additions

are only appropriate for this new class.

b) Deluxe hamburger - comes with chips and drinks as additions, but no extra additions are

allowed.hint: You have to find a way to automatically add these new additions at the

time the deluxe burger object is created, and then prevent other additions being made.

All 3 classes should have a method that can be called anytime to show the base price of the

hamburger plus all additionals, each showing the addition name, and addition price, and a grand

total for the burger

For the two additional classes this may require you to be looking at the base class for pricing

and then adding totals onto that.
