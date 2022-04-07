%to extract data about oil
varNames =["Date","Europe Brent Spot Price FOB (Dollars per Barrel)"];
delimiter = ',';
dataStartLine = [8814,8858];
extraColRule = 'ignore';
varTypes = {'string','double'};

opts = delimitedTextImportOptions('VariableNames',varNames,...
    'VariableNamingRule','preserve',...
                            'Delimiter',delimiter,...
                                'VariableTypes',varTypes,...
                                'DataLines', dataStartLine,...
                                'ExtraColumnsRule',extraColRule); 


preview('brentoilspotprice.csv',opts)

oil = readtable('brentoilspotprice.csv',opts);
%[n,m]=size(value_rub);
%for i=1:n
 %  for j=1:m
  %    value_rub(i,j)=str2double(value_rub(i,j));
   % end
%end
%disp(value_rub(3,3))

x = linspace(0,45,45);
myinfo = oil(:,2); 
myinfo=table2array(myinfo);
disp(myinfo)
plot(myinfo)
title('Evolution of Europe brent oil spot price')
xticks([0 11 22 33 45])
xticklabels({'01.02','15.02','01.03','15.03','04.04'})
ylabel('Value in dollars')
%s=stackedplot(myinfo);
%s.DisplayLabels = {'Europe Brent Spot Price'};
%disp(s)