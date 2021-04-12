use hakimLivs;

insert into category(category) VALUES 
('Bröd & kakor'),
('Skafferi'),
('Dryck'),
('Godis & snacks'),
('Hem & hushåll'),
('Hygien & apotek');


insert into unit(unit, longUnit) VALUES 
('ml','milliliter'),
('cl','centiliter'),
('l','liter'),
('g','gram'),
('hg','hektogram'),
('kg','kilogram'),
('st','styck'),
('fpr','förpackning');

insert into brand(brand) VALUES
('Göteborgs'),
('Linkosuo'),
('Semper'),
('Axa'),
('Pot noodle'),
('GoGreen'),
('Zeta'),
('Premium Life'),
('Vitamin well'),
('Redbull'),
('Fun Light'),
('OLW'),
('Fruit-tella'),
('Marabou'),
('Bubs'),
('Softlan'),
('Ninjaplast'),
('Wettex'),
('Ajax'),
('Pepsodent'),
('Palmolive'),
('Love Beauty & Planet');

insert into product(name, price, description, inventory, size, quantity, category_id, brand_id, unit_id, visibility) VALUES
('Ballerina Salted Caramel 10-pack', 69,'Ballerina salted caramel är två spröda kex med len och krämig fyllning med salt kolasmak',50, 190, 10, 1, 1, 4, TRUE),
('Råg crisps med gräddfil & dill', 19,'Perfekt när du ska bjuda på tilltugg eller smårätter.', 100, 150, 1, 1, 2, 4, TRUE),
('Salta Kex Vallmofrö',25,'Glutenfria, salta kex med vallmofrö. Goda som snacks både med eller utan topping!',70, 155, 1, 1, 3, 4, TRUE),
('Havregryn',12,'Nyckelhålsmärkta havregryn. Rika på fibrer, vitaminer och mineraler. Perfekta till bakningen eller gröten.',100, 750, 1, 2, 4, 4, TRUE),
('Koppnudlar kyckling och svamp', 12, 'Snabblagade nudlar i kopp med smak av kyckling och svamp. Klar att ätas på några minuter.', 120, 90, 1, 2, 5, 4, TRUE),
('Eko Majs', 13, 'Ekologiska majs från GoGreen.', 150, 380, 1, 2, 6, 4, TRUE),
('Casa di Luca Pappardelle', 25,'Pappardelle pasta gjord på durumvetemjöl. Ät med valfri pastasås eller ha i pastasalladen.', 100, 500, 1, 2, 7, 4, TRUE),
('Energidryck Mango 24-pack', 99,'Bubblig energidryck med taurin & koffein.', 100, 250, 24, 3, 8, 1, TRUE),
('Dryck "Celebrate Zero"', 12,'Vitamin Well Celebrate Zero är en kolsyrad och sockerfri dryck med smak av mango och ananas. Drycken innehåller vitamin D, B12 och zink.', 100, 355, 1, 3, 9, 1, TRUE),
('Eko Simply Cola 24-pack', 199, 'Red Bull Cola - en ekologiskt kolsyrad läsk med växtextrakt och naturligt koffein. Ger dig vingar när du behöver dem! Totalt 24 burkar.', 100, 250, 24, 3, 10, 1, TRUE),
('Saft Mojito', 15, 'Dryckeskoncentrat med smak av mojito - utan tillsatt socker samt med naturliga färger och aromer. Ger tio liter färdig dryck.', 70, 1, 1, 3, 11, 3, TRUE),
('Chips Ost, Tomat & Lök', 10, 'Bästisar i form av grovräfflade potatischips, stolt framröstade av kompisarna på Maskrosbarn. Smak av ost, tomat och lök.', 100, 250, 1, 4, 12, 4, TRUE),
('Hel låda Fruktkola Jordgubb', 129, 'Fruktkola med tydlig jordgubbssmak, här i ett 24-pack.', 70, 28, 24, 4, 13, 4, TRUE),
('Chokladask Aladdin', 29, 'Aladdin- Vad vore julen utan Aladdin? Svenska folkets mest älskade pralinask kommer med både julglädje - och den oskrivna regeln att aldrig börja på det undre lagret, förrän det övre är slut. Aladdin är en klassiker och funnits i Marabous sortiment sedan 1939.', 100, 500, 1, 4, 14, 4, FALSE),
('Godislåda', 69, 'Bubs godisfabrik är fantastiska på att tillverka godis. Men det händer faktiskt ibland att vissa godisar inte får helt perfekt form. Inga stora mängder, men både vi och Bubs anser att inget ska behöva slängas på grund av skönhetsfel. Därför säljer vi lådor med utmärkt, men inte helt perfekt godis. OBS: Vissa lådor är mer blandade än andra, det kan alltså förekomma en övervägande majoritet av en typ av godis, vissa lådor innehåller endast en sorts godis.', 50, 1.5, 1, 4, 15, 6, TRUE),
('Sköljmedel White Flower', 8, 'Sköljmedel för känslig hud med ingredienser från hållbara källor och naturligt ursprung. Formulan är också biolgiskt nedbrytbar. Dermatologiskt testad.', 50, 650, 1, 5, 16, 1, TRUE),
('Avfallspåsar med Drawstring 35L', 20, '100 procent fummelfria soppåsar från Ninjaplast! Gjorda av 100 procent återvunnen plast. Påsarna är försedda med drawstring vilket gör det enkelt och fummelfritt att hantera hushållssoporna. Så snygga att du kommer att vilja använda dem till annat än sopor.Bli en Ninja i köket!', 200, 15, 1, 5, 17, 7, TRUE),
('Disktrasor 3-pack', 13, 'Disktrasor pink edition från Wettex, här i ett 3-pack.', 70, 3, 1, 5, 18, 7, TRUE),
('Rengöringsspray Stainless Steel',27, 'Rengör effektivt och enkelt dina rostfria ytor med Ajax Specialist Stainless Steel rengöringsspray.', 50, 500, 1, 5, 19, 1, TRUE),
('Tandkräm Long Active White Fresh',9,'Pepsodent Long Active White Fresh är en fluortandkräm berikad med zink. Pepsodent Long Actives formula med Pro-Time Zinc använder de naturliga antibakteriella egenskaperna hos zink för att motverka bildandet av plackbakterier i upp till 24 timmar.', 10, 75, 1, 6, 20, 1, TRUE),
('Handtvål Kamelia', 15, 'Palmolive Naturals är en flytande handtvål med glycerin, som hjälper till att hålla huden återfuktad och hålla händer lena.Denna handtvål har en blommig doft av kameliaolja.',80, 300, 1, 6, 21, 1, TRUE),
('Duschkräm Muru Muru Butter & Rose', 39, 'Ta hand om dig själv och njut av en uppfriskande dusch med den fina duschkrämen med doft av Muru Muru Butter & Rose.', 30, 500, 1, 6, 22, 1, TRUE),
('Tandborste Vertical Expert Soft', 15, 'Med denna mjuka tanborste rengör du tack vare det solfjäderformat borsthuvudet effektivt plack mellan tänderna.', 40, 1, 1, 6, 20, 7, TRUE);	


insert into Image(image, product_id)VALUES
	('ballerina_salted_caramel_10-pack.png',1),
	('linkosuo_rye_crisps_sourcream_dill.jpg',2),
	('semper_crackers.jpg',3),
	('axa_havregryn_750g_ny.jpg',4),
	('pot_koppnudlar_kyckling_och_svamp_90g_.jpg',5),
	('gog_majskorn_380g_eko_.jpg',6),
	('ms121451-zet_casa_di_luca_pappardelle_500gjpg.jpg',7),
	('ms121444-24-pack_lif_energy_mango_dryck_250mljpg.jpg',8),
	('ms107352_dryck_celebrate_zero_355mljpg.jpg',9),
	('redbullsimplycola24p.jpg',10),
	('fun_light_mojito_ny.jpg',11),
	('ms117663_olw_friendchips_ost_tomat_lok_250g_front.jpg',12),
	('ms117631_24-pack_fru_mansikka_hedelmatoffee_vahemman_sokeria_28g.jpg',13),
	('ms120733-mar_aladdin_500gjpg.jpg',14),
	('godislada.png',15),
	('ms120252_sof_softlan_skoljmedel_plant_based_white_flower_650_ml_650mljpg.jpg',16),
	('ms118562_nin_avfallspasar_med_drawstring_35l_15pcs.jpg',17),
	('wet_new_wetter_art_collection_pink_edition_2020_3-pack_3pcs_.jpg',18),
	('ajax_stainless_steel.jpg',19),
	('ms120613_pep_pepsodent_tk_75ml_long_act_white_fresh_75jpg.jpg',20),
	('ms120250_pal_palmolive_flytande_handtval_camelia_300_ml_300mljpgjpg.jpg',21),
	('lovebeautyandplanet.jpg',22),
	('ms120611_pep_pepsodent_tb_vertical_expert_soft_x12_1pcsjpg.jpg',23);

insert into City(city)VALUES
	('Stockholm'),
	('Solna'),
	('Märsta'),
	('Hägersten'),
	('Vällingsby');

insert into areaCode(areacode, city_id) VALUES
	(11821, 1),
	(75655, 2),
	(23566, 3),
	(11234, 4),
	(66678, 5);
    
insert into address(address, areacode_id)VALUES
	('Stadsgårdsvägen 34', 1),
	('Husbygatan 12', 1),
	('Västerbyvägen 118', 2),
	('Kalmargatan 6', 3),
	('Väderkvarnsgatan 129',4),
	('Klustertorget 2', 5),
	('Västerbottengatan 14',1),
	('Isotopgatan 4', 5),
	('Slingerkroken 44', 2);

insert into customer(name, email, password, loyalCustomer, phone, Adminstatus, address_id)VALUES
('Jane','jabari45@example.org',null, TRUE,'070-1740605', FALSE, 1),
('Mark','mallie.abbott@example.org',null, TRUE,'070-1740606', FALSE,2),
('Ann','lpouros@example.com',null, FALSE,'070-1740607', FALSE,3),
('Rid','rath.felicity@example.net',null, TRUE,'070-1740608',FALSE,4),
('Berit','sim.heaney@example.com',null, TRUE,'070-1740609',FALSE,5),
('Per','ziemann.lucinda@example.net',null, FALSE,'070-1740610',FALSE,6),
('Nora','eichmann.daisha@example.com',null, FALSE,'070-1740611',FALSE,7),
('Matilda','ykoss@example.net',null, TRUE,'070-1740612', FALSE,8),
('Monica','huel.felicity@example.org',null, FALSE,'070-1740613',FALSE,8),
('Caroline','marley.doyle@example.com',null, FALSE,'070-1740614', FALSE,1),
('Hakim','greenfelder.brandy@example.com',null, TRUE,'070-1740615', TRUE,9);

insert into orderStatus(OrderStatus) VALUES
('Ny'),
('Plock'),
('Skickad');

insert into orders(orderDate,orderStatus_id,customer_id)VALUES
	("2021-03-29 14:00",1,1),
	("2021-03-26 13:30",2,3),
	("2021-03.25 10:45", 3, 2),
	("2021-03-19 11:00",3,4),
	("2021-03-29 15:10",1,4);

insert into order_contains(order_id, product_id, productamount)VALUES
	(1,2,1),
	(1,6,2),
	(1,8,1),
	(2,18,2),
	(2,19,3),
	(2,20,1),
	(2,6,4),
	(2,4,2),
	(2,1,5),
	(2,13,1),
	(2,2,3),
	(2,4,2),
	(3,14,3),
	(4,3,4),
	(4,15,1),
	(4,23,2),
	(4,11,1),
	(4,12,2),
	(5,16,5),
	(5,21,2),
	(5,1,4),
	(5,4,1),
	(5,12,2),
	(5,2,3);
