var members=['keep','pmh','fff'];

var roles={'programmer':'egoing',
'manager':'hh'
}; //object

console.log(roles.manager);

var i =0;
while(members.length>i){
    console.log('array loop',members[i]);
    i+=1;
}
for(var name in roles){
    console.log('object=>',name,'value=>',roles[name]);
}