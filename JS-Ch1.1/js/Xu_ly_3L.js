function Doc_du_lieu()
{
    var Du_lieu ={}
    var Xu_ly_HTTP = new XMLHttpRequest()
    Xu_ly_HTTP.open("Get","../Du_lieu_luu_tru/Ho_ten.txt",false)
    Xu_ly_HTTP.send("")
    var Chuoi_Ho_ten= Xu_ly_HTTP.responseText.trim()
    if(Chuoi_Ho_ten !="")
        Du_lieu = Chuoi_Ho_ten
        
    return Du_lieu
}