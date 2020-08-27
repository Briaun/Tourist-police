/// <reference types="cypress" />

describe('Test Login', function() {
   it('Login Fail', function() {
      cy.visit('http://devsw.police.dtcgps.com:3010/pages/login')
      cy.get('input[name="username"]').type("Tester")
      cy.get('input[name="password"]').type("Tester")
      cy.get('input[name="license"]').type("Tester")
      cy.get('button[name="button"]').click()
      cy.wait(3000)
      cy.contains("เข้าระบบไม่สำเร็จ")
   })
   it('Login Pass', function() {
      cy.get('input[name="username"]').clear()
      cy.get('input[name="username"]').type("TPL001")
      cy.get('input[name="password"]').clear()
      cy.get('input[name="password"]').type("1234")
      cy.get('input[name="license"]').clear()
      cy.get('input[name="license"]').type("tpl01")
      cy.get('button[name="button"]').click()
      cy.contains("เข้าระบบสำเร็จ")
      cy.wait(3000)
   })
}),
describe('GPS Realtime Page', function() {
   it('Search Fail', function() {
      cy.get('#Realtime_showCarGroupSelect').click()
      cy.contains("กรุณาเลือกกลุ่มรถ")
   })
   it('Search Pass', function() {
      cy.get('#Realtime_selectCarGroup').click()
      cy.contains("AAA").click()
      cy.get('#Realtime_showCarGroupSelect').click()

      cy.get("#Realtime_realtimeTable_table > header > div > input").type("No")
      cy.contains("No data Available")     
      cy.get("#Realtime_realtimeTable_table > header > div > input").clear().type("6กฬ-1931")
      cy.contains("6กฬ-1931").click()
   })
}),
describe('หน้ารถยนต์ที่จับภาพได้', function() {
   it('Search Fail', function() {
      cy.contains("รถยนต์ที่จับภาพได้").click()
      cy.get('#Snapshot_showSelect').click()
      cy.contains("กรุณาเลือกกลุ่มรถ")
      cy.contains("กรุณาเลือกรถสายตรวจ")
      cy.contains("กรุณาเลือกเวลาเริ่มต้น")
      cy.contains("กรุณาเลือกเวลาสิ้นสุด")
   })
   it('Search Pass', function() {
      cy.get('#Snapshot_selectCarGroup').click()
      cy.contains("เลือกทั้งหมด").click()
      cy.get('#Snapshot_selectPoliceCar').click()
      cy.contains("คค-4444").click()
      cy.get('#Snapshot_valueStartTime').click().type("2020-08-01 00:00:00")
      cy.get('#Snapshot_valueEndTime').click().type("2020-08-31 23:59:59")
      cy.get('#Snapshot_showSelect').click()
      cy.contains("6กฬ-1932")
      cy.contains("ภก-9675")

      cy.get("#Snapshot_snapshotTable_table > header > div > input").type("No")
      cy.contains("No data Available")     
      cy.get("#Snapshot_snapshotTable_table > header > div > input").clear().type("6กฬ-1932")
      cy.contains("6กฬ-1932")
      cy.contains("6กฬ-1932").click()
      cy.wait(3000)
   })
}),
describe('หน้ารถยนต์ต้องสงสัยหรือสูญหาย', function() {
   it('Search Blacklist', function() {
      cy.contains("รถยนต์ต้องสงสัยหรือสูญหาย").click()
      cy.wait(3000)
      cy.get('#BlacklistLost_showSelect').click()
      cy.contains("ออ-6666")
      cy.contains("โรงพยาบาลบางพลี")

      cy.get("#BlacklistLost_blacklistLostTable_table > header > div > input").type("No")
      cy.contains("No data Available")     
      cy.get("#BlacklistLost_blacklistLostTable_table > header > div > input").clear().type("คค-4444")   
      cy.contains("คค-4444").click()
      cy.wait(3000)
      cy.get("#BlacklistLost_blacklistLostTable_table > header > div > input").clear()
   })
   it('Search LostVehical', function() {
      cy.get('#BlacklistLost_selectStatus').click()
      cy.contains("รถยนต์สูญหาย").click()
      cy.get('#BlacklistLost_valueStartTime').click().type("2020-08-01 00:00:00")
      cy.get('#BlacklistLost_valueEndTime').click().type("2020-08-31 23:59:59")
      cy.get('#BlacklistLost_showSelect').click()
      cy.contains("ปงยางคก ห้างฉัตร ลำปาง 52190")
      cy.contains("6กฬ-1931").click()
      cy.contains("ทะเบียนรถ 6กฬ-1931").click()
      cy.wait(3000)
   })
}),
describe('ข้อมูล GPS (History)', function() {
   it('Search Fail', function() {
      cy.contains("ข้อมูล GPS (History)").click()
      cy.wait(3000)
      cy.get('#Historically_showSelect').click()
      cy.contains("กรุณาเลือกกลุ่มรถ")
      cy.contains("กรุณาเลือกรถสายตรวจ")
      cy.contains("กรุณาเลือกเวลาเริ่มต้น")
      cy.contains("กรุณาเลือกเวลาสิ้นสุด")
   })
   it('Search Pass', function() {
      cy.get('#Historically_selectCarGroup').click()
      cy.contains('AAA').click()
      cy.get('#Historically_selectPoliceCar').click()
      cy.contains('คค-4444').click()
      cy.get('#Historically_valueStartTime').click().type("2020-07-01 00:00:00")
      cy.get('#Historically_valueEndTime').click().type("2020-07-31 23:59:59")
      cy.get('#Historically_showSelect').click()

      cy.get("#Historically_historicallyTable_table > header > div > input").type("No")
      cy.contains("No data Available")     
      cy.get("#Historically_historicallyTable_table > header > div > input").clear().type("โกบอล")
      cy.contains("โกบอล").click()
   })
}),
describe('จัดการข้อมูลรถ', function() {
   it('ข้อมูลรถ', function() {
      cy.contains("จัดการข้อมูลรถ").click()
      cy.wait(3000) 
   })
   it('Add Fail (ข้อมูลรถ)', function() {
      cy.contains("เพิ่มข้อมูล").click()
      cy.wait(3000) 
      cy.get('#carDetail_save').click()
      cy.contains("กรุณาเลือกสถานะของรถ")
      cy.contains("กรุณาใส่ข้อมูลเบอร์กล่อง GPS")
      cy.contains("กรุณาเลือกรหัสกล้อง")
      cy.contains("กรุณาใส่ข้อมูลทะเบียนรถ")
      cy.contains("กรุณาเลือกจังหวัดป้ายทะเบียนรถ")
   })
   it('Add Pass (ข้อมูลรถ)', function() {
      cy.get("#carDetail_inputGPSBoxNumber").type("420420")
      cy.get("#carDetail_selectCamera").click().contains("SP001294").click()
      cy.get("#carDetail_inputLicensePlate").type("Tester420")
      cy.get("#carDetail_selectProvince").click().contains("ชัยนาท").click()
      cy.get("#carDetail_selectStatus").click()
      cy.contains("อื่น ๆ").click()
      cy.get('#carDetail_save').click()
   })
   it('Serach Vehicle & Edit & Delete (ข้อมูลรถ)', function() {
      cy.get("#carDetail_table > header > div > input").type("Tester420")
      cy.get("#carDetail_showOne > span.vs-button-text.vs-button--text").click()
      cy.get("#carDetail_inputLicensePlate").clear().type("TesterDTC")
      cy.get('#carDetail_save').click()
      cy.get("#carDetail_table > header > div > input").clear().type("TesterDTC")
      cy.get('#carDetail_openModal').click()
      cy.get('#carDetail_deleteCar').click()
      cy.contains("No data Available")
   })
   it('Add Serach Type Vehicle & Edit & Delete (ประเภทรถ)', function() {
      cy.contains("ประเภทรถ").click()
      cy.wait(2000)
      cy.get("#carType_save").click()
      cy.contains("กรุณาใส่ข้อมูลประเภทรถก่อนบันทึก")

      cy.get('#carType_inputCarTypeDesc').type("Tester420")
      cy.get("#carType_save").click()
      cy.get("#carType_table > header > div > input").type("Tester420")
      cy.get("#carType_showOne > span.vs-button-text.vs-button--text").click()

      cy.get('#carType_inputCarTypeDesc').clear().type("TesterDTC")
      cy.get("#carType_save").click()

      cy.get("#carType_table > header > div > input").clear().type("TesterDTC")

      cy.get("#carType_openModal").click()
      cy.get("#carType_deleteCarType").click()
      cy.contains("No data Available")
   })
   it('Add Serach Brand Vehicle & Edit & Delete (ยี่ห้อ)', function() {
      cy.contains("ยี่ห้อ").click()
      cy.wait(2000)
      cy.get("#carBrand_save").click()
      cy.contains("กรุณาใส่ข้อมูลยี่ห้อรถก่อนบันทึก")

      cy.get('#carBrand_inputCarBrandDesc').type("Tester420")
      cy.get("#carBrand_save").click()
      cy.get("#carBrand_table > header > div > input").type("Tester420")
      cy.get("#carBrand_showOne > span.vs-button-text.vs-button--text").click()

      cy.get('#carBrand_inputCarBrandDesc').clear().type("TesterDTC")
      cy.get("#carBrand_save").click()

      cy.get("#carBrand_table > header > div > input").clear().type("TesterDTC")

      cy.get("#carBrand_openModal").click()
      cy.get("#carBrand_deleteCarBrand").click()
      cy.contains("No data Available")
   })
   it('Add Serach Group Vehicle & Edit & Delete (กลุ่มรถ)', function() {
      cy.contains("กลุ่มรถ").click()
      cy.wait(2000)
      cy.get("#carGroup_save").click()
      cy.contains("กรุณาใส่ชื่อกลุ่มรถก่อนบันทึก")

      cy.get('#carGroup_inputCarGroupDesc').type("Tester420")
      cy.get("#carGroup_save").click()
      cy.get("#carGroup_table > header > div > input").type("Tester420")
      cy.get("#carGroup_viewItem").click()
      
      cy.get('#carList_selectedCarList').click().contains("42011").click()
      cy.get('#carList_selectedCarList').click().contains("ดด-1111").click()
      cy.get('#carList_add').click()
      cy.get('#carList_table > div > div.vs-con-tbody.vs-table--tbody').contains("42011")
      cy.get('#carList_table > div > div.vs-con-tbody.vs-table--tbody').contains("ดด-1111")
      cy.get('#carGroup_showSelectModal > span > svg').click()

      cy.get("#carGroup_showOne").click()
      cy.get('#carGroup_inputCarGroupDesc').clear().type("TesterDTC")
      cy.get("#carGroup_save").click()
      cy.get("#carGroup_table > header > div > input").clear().type("TesterDTC")

      cy.get("#carGroup_openModalDelete").click()
      cy.get("#carStatus_deleteCarGroup").click()
      cy.contains("No data Available")
   })
   it('Add Serach Blacklist Vehicle & Edit & Delete (รถต้องสงสัย )', function() {
      cy.get("#tab5_carblacklist").click()
      cy.get("#carBlacklist_add").click()
      cy.get("#carBlacklist_save").click()
      cy.contains("กรุณาเลือกข้อมูลรถสำหรับคดีใหม่")
      cy.contains("กรุณาใส่หมายเลขคดี")
      cy.contains("กรุณาใส่ข้อมูลท้องที่ที่รับแจ้งเหตุ")
      cy.contains("กรุณาใส่ข้อมูลชื่อผู้แจ้งเหตุ")
      cy.contains("กรุณาใส่ข้อมูลนามสกุลผู้แจ้งเหตุ")

      cy.get("#carBlacklist_selectCar_add").click().contains("ดด-1111").click()
      cy.get("#carBlacklist_inputCaseNumber").type("44ดf53")
      cy.get("#carBlacklist_inputNearLocate").type("bangna")
      cy.get("#carBlacklist_inputFirstname").type("Tester")
      cy.get("#carBlacklist_inputLastname").type("DTC")
      cy.get("#carBlacklist_save").click()

      cy.get("#carBlacklist_selectCar").click().contains("5678").click()
      cy.get("#carBlacklist_table > div > div.vs-con-tbody.vs-table--tbody > table > tr > td:nth-child(2)").contains("5678")
      cy.get("#vs16__combobox > div.vs__actions > button > span > svg").click()

      cy.get("#carBlacklist_table > header > div.con-input-search.vs-table--search > input").type("bangna")
      cy.get("#carBlacklist_showOne").click()

      cy.get("#carBlacklist_inputNearLocate").clear().type("Bitech")
      cy.get("#carBlacklist_save").click()
      cy.get("#carBlacklist_table > header > div.con-input-search.vs-table--search > input").clear().type("Bitech")
      cy.get("#carBlacklist_openModal").click()
      cy.get("#carBlacklist_deleteCase").click()
      cy.contains("No data Available")
   })
}),
describe('จัดการข้อมูลกล้อง', function() {
   it('หน้าข้อมูลกล้อง', function() {
      cy.contains("จัดการข้อมูลกล้อง").click()
      cy.wait(3000) 
   })
   it('Add Search Camera Edit & Delete (ข้อมูลกล้อง)', function() {
      cy.get("#cameraDetail_add").click()
      cy.get("#cameraDetail_save").click()
      cy.contains("กรุณาใส่ข้อมูลรหัสกล้อง")
      cy.contains("กรุณาใส่หมายเลขเซิร์ฟเวอร์กล้อง")
      cy.contains("กรุณาใส่หมายเลขพอร์ทกล้อง")
      cy.contains("กรุณาเลือกประเภทกล้อง")
      cy.contains("กรุณาใส่จำนวนที่ติดตั้ง")

      cy.get("#cameraDetail_inputCameraName").type("420420420")
      cy.get("#cameraDetail_inputCameraServer").type("444")
      cy.get("#cameraDetail_inputCameraPort").type("999")
      cy.get("#cameraDetail_selectType").click().contains("กล้องประจำตัวเจ้าหน้าที่สายตรวจ").click()
      cy.get("#cameraDetail_inputCameraAmount").clear().type("4")
      cy.get("#cameraDetail_save").click()

      cy.get("#cameraDetail_table > header > div > input").type("420420420")
      cy.get("#cameraDetail_showOne").click()
      cy.get("#cameraDetail_inputCameraName").type("420420421")
      cy.get("#cameraDetail_save").click()
      cy.get("#cameraDetail_table > header > div > input").clear().type("420420421")

      cy.get("#cameraDetail_openModal").click()
      cy.get("#camera_deleteCamera").click()
      cy.contains("No data Available")
   })
   it('Add Serach Type Camera & Edit & Delete (ประเภทกล้อง)', function() {
      cy.contains("ประเภทกล้อง").click()
      cy.wait(2000)
      cy.get("#cameraType_save").click()
      cy.contains("กรุณาใส่ชื่อประเภทกล้องก่อนบันทึก")

      cy.get('#cameraType_inputCameraTypeDesc').type("Tester420")
      cy.get("#cameraType_save").click()
      cy.get("#cameraType_table > header > div > input").type("Tester420")
      cy.get("#cameraType_showOne").click()

      cy.get('#cameraType_inputCameraTypeDesc').clear().type("TesterDTC")
      cy.get("#cameraType_save").click()

      cy.get("#cameraType_table > header > div > input").clear().type("TesterDTC")

      cy.get("#cameraType_openModal").click()
      cy.get("#cameraType_deleteCameraType").click()
      cy.contains("No data Available")
      cy.get("#cameraType_table > header > div > input").clear()
   })
})