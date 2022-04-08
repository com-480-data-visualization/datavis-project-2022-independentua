opts = detectImportOptions('mycurrency.csv');
opts.SelectedVariableNames = {'EUR','JPY','CHF'};
opts.DataLines = [3,61]; %59 rows
preview('mycurrency.csv',opts)
data = readmatrix('mycurrency.csv',opts);

%to extract data about rubles
varNames =["Date","Dernier","Ouv."," Haut","Plus Bas","Variation %"];
delimiter = ',';
dataStartLine = [2,60];
extraColRule = 'ignore';
varTypes = {'double','double','double','double','double','double',};

opts = delimitedTextImportOptions('VariableNames',varNames,...
    'VariableNamingRule','preserve',...
                            'Delimiter',delimiter,...
                                'VariableTypes',varTypes,...
                                'DataLines', dataStartLine,...
                                'ExtraColumnsRule',extraColRule); 


preview('HistoricalPrices.csv',opts)

value_rub = readmatrix('HistoricalPrices.csv',opts);


%plot(myinfo,"Europe Brent Spot Price FOB (Dollars per Barrel)")
%scatter(x,myinfo,'r')
%legend('Brent oil spot price')

x = linspace(0,39.5,59);
z = data(:,1); 
z = flip(z); % to get from the past to the future
scatter(x,z,'r')
legend('value euro')

%x = linspace(0,50,59);

figure

y = value_rub(:,2);
y = flip(y); % to get the past to future
%disp(y)
subplot(3,1,1)
plot(z,'green')
title('Evolution of the euro in USD')
xticks([0 15 30 45 60])
xticklabels({'01.02','15.02','01.03','15.03','01.04'})
ylabel('Value in dollars')

%legend('value euro/USD')
subplot(3,1,2)
plot(y)
title('Evolution of the ruble in USD')
xticks([0 15 30 45 60])
xticklabels({'01.02','15.02','01.03','15.03','01.04'})
ylabel('Value in dollars')

%legend('value CHF/USD')
subplot(3,1,3)
h = data(:,3);
h = flip(h);
plot(h)
title('Evolution of the CHF in USD')
xticks([0 15 30 45 60])
xticklabels({'01.02','15.02','01.03','15.03','01.04'})
ylabel('Value in dollars')


%infos = readtable('mycurrency.csv',opts);
%opts = detectImportOptions('USD_RUB - Données Historiques.csv');
%opts.SelectedVariableNames = {'VAR2'};
%opts.DataLines = [21 100]; %80 rows
%data_rub = readtable('USD_RUB - Données Historiques.csv',opts);
%disp(data_rub(2,2))


