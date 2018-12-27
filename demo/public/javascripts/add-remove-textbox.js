 $(document).ready(function () {


            // ตั้งค่าเริ่มต้นจำนวนถัดไปของ Textbox 
            var counter = 2;
            // เมื่อคลิกปุ่ม Add Button 
            $("#addButton").click(function () {
                // ตรวจสอบว่ามี Textbox มากกว่า 10 หรือไม่ ถ้ามากกว่า่ให้แจ้งกล่องข้อความ
                // Textbox ไม่ให้เกิน 10
                if (counter > 10) {
                    alert("Only 10 textboxes allow");
                    return false;
                }

                // ถ้า Textbox ยังไม่ถึง 10 ให้สร้าง Textbox ขึ้นมา
                var newTextBoxDiv = $(document.createElement('div'))
                    .attr("id", 'TextBoxDiv' + counter);

                newTextBoxDiv.after().html('<label>Textbox #' + counter + ' : </label>' +
                                           '<input type="text" name="textbox' + counter +'" id="textbox' + counter + '" value="" >');
                                           
                newTextBoxDiv.appendTo("#TextBoxesGroup");
                counter++;
            });

            $("#removeButton").click(function () {
                // ถ้าค่าจำนวนถัดไปของ Textbox เท่ากับ 1 ให้แจ้งข้อความเตือน
                if (counter == 1) {
                    alert("No more textbox to remove");
                    return false;
                }
                counter--;
                // ลบ Textbox โดยอ้างอิงจาก ID ของแท็ก Div ที่มี Textbox อยู่ภายใน
                $("#TextBoxDiv" + counter).remove();
            });
        });