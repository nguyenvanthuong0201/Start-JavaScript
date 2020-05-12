const entity={
    type: "none",
    method: function(){
        console.log(this.type);
    }
}
let obj=Object.create(entity);
obj.type="Nguyễn Văn Hiếu";
obj.method();

let obje=Object.create(entity);
obje.type="Nguyễn Văn Đông";
obje.method();