import React from "react";
import AlertItem from "./AlertItem";

function Alert() {
  return <div>
       <section class="wrapper">
            <h2 class="section-title">الرت به همراه Title</h2>
            <div class="container-fluid">
                <AlertItem title="باریکلا !"
                 text="شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید!"
                 desc="برای کسب اطلاعات بیشتر با مدیریت مجموعه منشور پلاس تماس بگیرید"  class_name="success"></AlertItem>

                 <AlertItem title="هشدار !"
                 text="شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید!"
                 desc="برای کسب اطلاعات بیشتر با مدیریت مجموعه منشور پلاس تماس بگیرید"  class_name="success"></AlertItem>

                 <AlertItem title="خطا !"
                 text="شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید! شما موفق شدین همه ی تست ها رو درست بزنید!"
                 desc="برای کسب اطلاعات بیشتر با مدیریت مجموعه منشور پلاس تماس بگیرید"  class_name="success"></AlertItem>
            </div>
        </section>
  </div>;
}

export default Alert;