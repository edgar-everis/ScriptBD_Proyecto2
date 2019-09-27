/*
* Project Script
*
*/
print("STARTING SCRIPT");
//Host
conn = new Mongo("localhost");
//Database Name
db = conn.getDB("dbmicroservicios");
/Clean Database if already exists/
db.dropDatabase();
/Collection creation/
db.createCollection("Reporte1");
db.createCollection("Course");
db.createCollection("Reporte2");
db.createCollection("Teachers");
db.createCollection("ListCourseParents");
db.createCollection("CourseParents");
db.createCollection("Students");
db.createCollection("Parents");


print("***********creating Reporte1*********");
reporte1= {
"_id" : "1",
"idstudent" : "ST01",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

}
reporte2= {
"_id" : "2",
"idstudent" : "ST01",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "activo",
}
reporte3= {
"_id" : "3",
"idstudent" : "ST01",
"idcourse" : "C03",
"status" : "abierto",
"condition" : "activo",

}
reporte4= {
"_id" : "4",
"idstudent" : "ST01",
"idcourse" : "C04",
"status" : "abierto",
"condition" : "activo",
}

reporte5= {
"_id" : "5",
"idstudent" : "ST01",
"idcourse" : "C05",
"status" : "abierto",
"condition" : "activo",

}
reporte6= {
"_id" : "6",
"idstudent" : "ST01",
"idcourse" : "C06",
"status" : "abierto",
"condition" : "finalizado",
}
reporte7= {
"_id" : "7",
"idstudent" : "ST01",
"idcourse" : "C07",
"status" : "abierto",
"condition" : "finalizado",

}
reporte8= {
"_id" : "8",
"idstudent" : "ST01",
"idcourse" : "C08",
"status" : "abierto",
"condition" : "finalizado",
}

reporte9= {
"_id" : "9",
"idstudent" : "ST02",
"idcourse" : "C09",
"status" : "abierto",
"condition" : "activo",

}
reporte10= {
"_id" : "10",
"idstudent" : "ST02",
"idcourse" : "C010",
"status" : "abierto",
"condition" : "activo",
}
reporte11= {
"_id" : "11",
"idstudent" : "ST02",
"idcourse" : "C011",
"status" : "abierto",
"condition" : "activo",

}
reporte12= {
"_id" : "12",
"idstudent" : "ST02",
"idcourse" : "C012",
"status" : "abierto",
"condition" : "activo",
}

reporte13= {
"_id" : "13",
"idstudent" : "ST02",
"idcourse" : "C013",
"status" : "abierto",
"condition" : "activo",

}
reporte14= {
"_id" : "14",
"idstudent" : "ST02",
"idcourse" : "C014",
"status" : "abierto",
"condition" : "finalizado",
}
reporte15= {
"_id" : "15",
"idstudent" : "ST02",
"idcourse" : "C015",
"status" : "abierto",
"condition" : "finalizado",

}
reporte16= {
"_id" : "16",
"idstudent" : "ST02",
"idcourse" : "C016",
"status" : "abierto",
"condition" : "finalizado",
}

print("***********creating Course*********");
course1= {
"_id" : "1",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU01",
"minstudent": "15",
"maxstudent":"30"
};
course2= {
"_id" : "2",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU02",
"minstudent": "15",
"maxstudent":"30"

};
course3= {
"_id" : "3",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU03",
"minstudent": "15",
"maxstudent":"30"

};
course4= {
"_id" : "4",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU04",
"minstudent": "15",
"maxstudent":"30"
};
course5= {
"_id" : "5",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU05",
"minstudent": "15",
"maxstudent":"30"
};
course6= {
"_id" : "6",
"idcourse" : "C01",
"coursename" : "Algoritmos",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU06",
"minstudent": "15",
"maxstudent":"30"
};

course7= {
"_id" : "7",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU01",
"minstudent": "15",
"maxstudent":"30"
};

course8= {
"_id" : "8",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU02",
"minstudent": "15",
"maxstudent":"30"
};

course9= {
"_id" : "9",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU03",
"minstudent": "15",
"maxstudent":"30"

};
course10= {
"_id" : "10",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU04",
"minstudent": "15",
"maxstudent":"30"

};
course11= {
"_id" : "11",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU05",
"minstudent": "15",
"maxstudent":"30"

};
course12= {
"_id" : "12",
"idcourse" : "C02",
"coursename" : "Android",
"idteacher" : "P01",
"typeusu" : "STU",
"idstudent" : "STU06",
"minstudent": "15",
"maxstudent":"30"

};

print("***********creating Reporte2*********");
reporte21= {
"_id" : "1",
"idteacher" : "P01",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte22= {
"_id" : "2",
"idteacher" : "P01",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finalizado",

};
reporte23= {
"_id" : "3",
"idteacher" : "P02",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte24= {
"_id" : "4",
"idteacher" : "P02",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finalizado",

};
reporte25= {
"_id" : "5",
"idteacher" : "P03",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte26= {
"_id" : "6",
"idteacher" : "P03",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finzalizado",

};

reporte27= {
"_id" : "7",
"idteacher" : "P04",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte28= {
"_id" : "8",
"idteacher" : "P04",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finalizado",

};

reporte29= {
"_id" : "9",
"idteacher" : "P05",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte30= {
"_id" : "10",
"idteacher" : "P05",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finalizado",

};
reporte31= {
"_id" : "11",
"idteacher" : "P06",
"idcourse" : "C01",
"status" : "abierto",
"condition" : "activo",

};
reporte32= {
"_id" : "12",
"idteacher" : "P06",
"idcourse" : "C02",
"status" : "abierto",
"condition" : "finalizado",

};


print("***********creating Teachers*********");
teacher1= {
"_id" : "1","fullname" : "Carlos","gender" : "M","birthdate" : ISODate("1950-09-16T05:00:00Z"),"typedoc" : "dni","document" : "111111",
}
teacher2= {
"_id" : "2","fullname" : "Andres","gender" : "M","birthdate" : ISODate("1960-09-16T05:00:00Z"),"typedoc" : "dni","document" : "222222",
}
teacher3= {
  "_id" : "3","fullname" : "Jose","gender" : "M","birthdate" : ISODate("1970-09-16T05:00:00Z"),"typedoc" : "dni","document" : "333333",
}
teacher4= {
  "_id" : "4","fullname" : "Marcelo","gender" : "M","birthdate" : ISODate("1980-09-16T05:00:00Z"),"typedoc" : "dni","document" : "444444",
}

print("****************creating ListCourseParents****************");
list1= {
"_id" : "1","idparent" : "PA01","idcourse" : "C01","idstuteac" : "STU01",
}
list2= {
"_id" : "2","idparent" : "PA01","idcourse" : "C02","idstuteac" : "STU01",
}
list3= {
"_id" : "3","idparent" : "PA01","idcourse" : "C03","idstuteac" : "STU01",
}
list4= {
"_id" : "4","idparent" : "PA01","idcourse" : "C04","idstuteac" : "STU01",
}
list5= {
"_id" : "5","idparent" : "PA02","idcourse" : "C01","idstuteac" : "STU01",
}
list6= {
"_id" : "6","idparent" : "PA02","idcourse" : "C02","idstuteac" : "STU01",
}
list7= {
"_id" : "7","idparent" : "PA03","idcourse" : "C01","idstuteac" : "STU01",
}
list8= {
"_id" : "8","idparent" : "PA03","idcourse" : "C02","idstuteac" : "STU01",
}
list9= {
"_id" : "9","idparent" : "PA04","idcourse" : "C01","idstuteac" : "STU02",
}
list10= {
"_id" : "10","idparent" : "PA04","idcourse" : "C02","idstuteac" : "STU02",
}
list11= {
"_id" : "11","idparent" : "PA04","idcourse" : "C03","idstuteac" : "STU02",
}
list12= {
"_id" : "12","idparent" : "PA04","idcourse" : "C04","idstuteac" : "STU02",
}
list13= {
"_id" : "13","idparent" : "PA05","idcourse" : "C01","idstuteac" : "STU02",
}
list14= {
"_id" : "14","idparent" : "PA05","idcourse" : "C02","idstuteac" : "STU02",
}
list15= {
"_id" : "15","idparent" : "PA06","idcourse" : "C01","idstuteac" : "STU02",
}
list16= {
"_id" : "16","idparent" : "PA06","idcourse" : "C02","idstuteac" : "STU02",
}




print("****************creating CourseParents****************");
courseparent1= {
"_id" : "1","idparent" : "PA01","idcourse" :"C01","status" :"abierto","condition" : "finalizado"
}
courseparent2= {
"_id" : "2","idparent" : "PA01","idcourse" :"C02","status" :"abierto","condition" : "activo"
}
courseparent3= {
"_id" : "3","idparent" : "PA01","idcourse" :"C03","status" :"abierto","condition" : "activo"
}
courseparent4= {
"_id" : "4","idparent" : "PA02","idcourse" :"C01","status" :"abierto","condition" : "finalizado"
}
courseparent5= {
"_id" : "5","idparent" : "PA02","idcourse" :"C02","status" :"abierto","condition" : "activo"
}
courseparent6= {
"_id" : "6","idparent" : "PA02","idcourse" :"C03","status" :"abierto","condition" : "activo"
}
courseparent7= {
"_id" : "7","idparent" : "PA02","idcourse" :"C01","status" :"abierto","condition" : "finalizado"
}
courseparent8= {
"_id" : "8","idparent" : "PA02","idcourse" :"C02","status" :"abierto","condition" : "activo"
}
courseparent9= {
"_id" : "9","idparent" : "PA02","idcourse" :"C03","status" :"abierto","condition" : "activo"
}


print("***********creating Students*********");
student1= {
"_id" : "1","fullname" : "Juan","gender" : "M","birthdate" : ISODate("1987-09-16T05:00:00Z"),"typedoc" : "dni","document" : "111111",
}
student2= {
"_id" : "2","fullname" : "Carlos","gender" : "M","birthdate" : ISODate("1990-09-16T05:00:00Z"),"typedoc" : "dni","document" : "222222",
}
student3= {
  "_id" : "3","fullname" : "Luis","gender" : "M","birthdate" : ISODate("1992-09-16T05:00:00Z"),"typedoc" : "dni","document" : "333333",
}
student4= {
  "_id" : "4","fullname" : "Angel","gender" : "M","birthdate" : ISODate("1995-09-16T05:00:00Z"),"typedoc" : "dni","document" : "444444",
}
student5= {
"_id" : "5","fullname" : "Kevin","gender" : "M","birthdate" : ISODate("1988-09-16T05:00:00Z"),"typedoc" : "dni","document" : "555555",
}
student6= {
"_id" : "6","fullname" : "Ferando","gender" : "M","birthdate" : ISODate("1989-09-16T05:00:00Z"),"typedoc" : "dni","document" : "666666",
}
student7= {
  "_id" : "7","fullname" : "Ricardo","gender" : "M","birthdate" : ISODate("1988-09-16T05:00:00Z"),"typedoc" : "dni","document" : "777777",
}
student8= {
  "_id" : "8","fullname" : "Diego","gender" : "M","birthdate" : ISODate("1996-09-16T05:00:00Z"),"typedoc" : "dni","document" : "888888",
}

print("***********creating Parents*********");
parent1= {
"_id" : "1","fullname" : "Juan","gender" : "M","birthdate" : ISODate("1970-09-16T05:00:00Z"),"typedoc" : "dni","document" : "111111",
"idstudent" : "STU01","idfamily":"Quispe"
}
parent2= {
"_id" : "2","fullname" : "Ines","gender" : "F","birthdate" : ISODate("1975-09-16T05:00:00Z"),"typedoc" : "dni","document" : "222222",
"idstudent" :"STU01", "idfamily":"Quispe"
}
parent3= {
  "_id" : "3","fullname" : "Luis","gender" : "M","birthdate" : ISODate("1988-09-16T05:00:00Z"),"typedoc" : "dni","document" : "333333",
  "idstudent" :"STU01", "idfamily":"Quispe"
}
parent4= {
"_id" : "4","fullname" : "Antonio","gender" : "M","birthdate" : ISODate("1975-09-16T05:00:00Z"),"typedoc" : "dni","document" : "444444",
"idstudent" : "STU02","idfamily":"Romero"
}
parent5= {
"_id" : "5","fullname" : "Marisela","gender" : "F","birthdate" : ISODate("1980-09-16T05:00:00Z"),"typedoc" : "dni","document" : "555555",
"idstudent" :"STU02", "idfamily":"Romero"
}
parent6= {
  "_id" : "6","fullname" : "Andres","gender" : "M","birthdate" : ISODate("2000-09-16T05:00:00Z"),"typedoc" : "dni","document" : "666666",
  "idstudent" :"STU02", "idfamily":"Romero"
}
parent7= {
"_id" : "7","fullname" : "Franklin","gender" : "M","birthdate" : ISODate("1975-09-16T05:00:00Z"),"typedoc" : "dni","document" : "777777",
"idstudent" : "STU03","idfamily":"Alvarado"
}
parent8= {
"_id" : "8","fullname" : "Beatriz","gender" : "F","birthdate" : ISODate("1980-09-16T05:00:00Z"),"typedoc" : "dni","document" : "888888",
"idstudent" :"STU03", "idfamily":"Alvarado"
}
parent9= {
  "_id" : "9","fullname" : "Gerson","gender" : "M","birthdate" : ISODate("2000-09-16T05:00:00Z"),"typedoc" : "dni","document" : "999999",
  "idstudent" :"STU03", "idfamily":"Alvarado"
}



print("***********saving Reportes1*********");
db.Reporte1.save(reporte1);
db.Reporte1.save(reporte2);
db.Reporte1.save(reporte3);
db.Reporte1.save(reporte4);
db.Reporte1.save(reporte5);
db.Reporte1.save(reporte6);
db.Reporte1.save(reporte7);
db.Reporte1.save(reporte8);
db.Reporte1.save(reporte9);
db.Reporte1.save(reporte10);
db.Reporte1.save(reporte11);
db.Reporte1.save(reporte12);
db.Reporte1.save(reporte13);
db.Reporte1.save(reporte14);
db.Reporte1.save(reporte15);
db.Reporte1.save(reporte16);

print("***********saving Reportes2*********");
db.Reporte2.save(reporte21);
db.Reporte2.save(reporte22);
db.Reporte2.save(reporte23);
db.Reporte2.save(reporte24);
db.Reporte2.save(reporte25);
db.Reporte2.save(reporte26);
db.Reporte2.save(reporte27);
db.Reporte2.save(reporte28);
db.Reporte2.save(reporte29);
db.Reporte2.save(reporte30);
db.Reporte2.save(reporte31);
db.Reporte2.save(reporte32);


print("***********saving course*********");
db.Course.save(course1);
db.Course.save(course2);
db.Course.save(course3);
db.Course.save(course4);
db.Course.save(course6);
db.Course.save(course7);
db.Course.save(course8);
db.Course.save(course9);
db.Course.save(course10);
db.Course.save(course11);
db.Course.save(course12);


print("***********saving teachers*********");
db.Teachers.save(teacher1);
db.Teachers.save(teacher2);
db.Teachers.save(teacher3);

print("***********saving ListCourseParents*********");
db.ListCourseParents.save(list1);
db.ListCourseParents.save(list2);
db.ListCourseParents.save(list3);
db.ListCourseParents.save(list4);
db.ListCourseParents.save(list5);
db.ListCourseParents.save(list6);
db.ListCourseParents.save(list7);
db.ListCourseParents.save(list8);
db.ListCourseParents.save(list9);
db.ListCourseParents.save(list10);
db.ListCourseParents.save(list11);
db.ListCourseParents.save(list12);
db.ListCourseParents.save(list13);
db.ListCourseParents.save(list14);
db.ListCourseParents.save(list15);
db.ListCourseParents.save(list16);

print("***********saving CourseParents*********");
db.CourseParents.save(courseparent1);
db.CourseParents.save(courseparent2);
db.CourseParents.save(courseparent3);
db.CourseParents.save(courseparent4);
db.CourseParents.save(courseparent5);
db.CourseParents.save(courseparent6);
db.CourseParents.save(courseparent7);
db.CourseParents.save(courseparent8);
db.CourseParents.save(courseparent9);

print("***********saving Students*********");
db.Students.save(student1);
db.Students.save(student2);
db.Students.save(student3);
db.Students.save(student4);
db.Students.save(student5);
db.Students.save(student6);
db.Students.save(student7);
db.Students.save(student8);

print("***********saving Parents*********");
db.Parents.save(parent1);
db.Parents.save(parent2);
db.Parents.save(parent3);
db.Parents.save(parent4);
db.Parents.save(parent5);
db.Parents.save(parent6);
db.Parents.save(parent7);
db.Parents.save(parent8);
db.Parents.save(parent9);





print("SCRIPT FINISHED");
