import React from 'react'
import ReactPDF, { Page, Text, View, Document, StyleSheet, Image, Note } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: 'white',
        padding: '50px'
    },
    gerb: {
        width: "100px",
        height: "100px",
        marginBottom: '30px'
    },
    head: {
        margin: '20px 0px',
        fontSize: "16px",
        fontStyle: "900"
    },
    footer: {
        fontSize: "12px"
    },
    date: {
        margin: '0px 20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tin: {
        margin: '20px 20px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        fontSize: "10px"
    },
    body: {
        fontSize: "14px",
        lineHeight: '1.5px'
    },
    end: {
        marginTop: '30px',
        padding: '10px',
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    endtext: {
        fontSize: "12px"
    },
    qr: {
        marginTop: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    qrcode: {
        width: '100px',
        height: '100px'
    },
    flex: {
        marginTop: '30px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    }
})

// Create Document Component
const CancelMessage = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Image style={styles.gerb} src={require("@src/assets/images/logo/gerb.png").default} />
            <Text>O‘ZBEKISTON RESPUBLIKASI</Text>
            <View style={styles.date}>
                <Text style={styles.text}>10.02.2022</Text>
                <Text style={styles.text}>N: 77274</Text>
            </View>
            <Text style={styles.head}>
                XABARNOMA
            </Text>
            <Text style={styles.body}>
                Toshkent shahar Mirobod tumani Davlat xizmatlari markazida 2018 yil – oktyabrda ------- reyestr raqami bilan davlat ro‘yxatidan o‘tgan “PETROV” MCHJ O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019 yil
                21 avgustdagi 704-sonli qarori bilan tasdiqlangan “Tadbirkorlik subyektlarini ixtiyoriy tugatish va ularning faoliyatini to‘xtatish tartibi to‘g‘risida”gi nizomga asosan ixtiyoriy tugatish jarayoniga kiritildi.
            </Text>
            <View style={styles.tin}>
                <Text style={styles.text}>TIN: 9494949</Text>
            </View>
            <Text style={styles.footer}>
                Eslatma: Tijorat tashkilotini ixtiyoriy tugatishning umumiy muddati ro‘yxatdan o‘tkazuvchi organ ixtiyoriy tugatish to‘g‘risida xabardor qilingan kundan boshlab olti oydan oshmasligi kerak.
            </Text>
            <View style={styles.flex}>
                <View style={styles.end}>
                    <Text style={styles.endtext}>Markaz direktori:</Text>
                    <Text style={styles.endtext}>A.Abdullayev</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.endtext}>Ijrochi:</Text>
                    <Text style={styles.endtext}>A.Abdullayev</Text>
                </View>
            </View>
            <View style={styles.qr}>
                <Image style={styles.qrcode} src="http://4.bp.blogspot.com/-5gOMn-tRGoE/UZ08u_GZYPI/AAAAAAAAAfE/VWreJygkk9Y/s1600/qrcode.png" />
            </View>
        </Page>
    </Document>
)

export default CancelMessage