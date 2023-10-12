export default function handler(req,res){
    const item={
        side:{
            menu:{
                veg:["gobi",'corn','skdb'],
                nonveg:['chicken','mutton','fish'],
            },
        },
        soups:{
            menu:{
                veg:['sadadaa','asjhd',],
                nonveg:['asdd','dasda',],
            },
        },
    }
    res.status(200).json(item);
}