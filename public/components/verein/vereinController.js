landingPage.controller("vereinCtrl", ['$scope', 'lpk_dataProvider', function($scope, lpkData){
    $scope.ziele = [
        {
            head: "Wir blicken durch",
            body: "Die Landespressekonferenz Brandenburg e.V . will Regierungs- und Parlamentsarbeit transparent machen. Wir wollen hinter die Kulissen schauen und unseren Mitgliedern mehr Möglichkeiten verschaffen, die Öffentlichkeit tiefgründig und kompetent zu unterrichten."
        },
        {
            head: "Wir sind",
            body: "ein Zusammenschluss von festangestellten und freien Journalisten, die als Redakteure oder Korrespondenten hauptberuflich für Tages- oder Wochenzeitungen, Zeitschriften, Nachrichtenagenturen, Rundfunk- oder Fernsehanstalten oder Onlinedienste arbeiten. Wir berichten ständig über politische, wirtschaftliche, soziale und kulturelle Themen des Landes Brandenburg. ",
            shorter: true
        },
        {
            head: "Wir mischen uns ein",
            body: "Ob in Pressekonferenzen, Hintergrundgesprächen, Festveranstaltungen oder Interventionen, wir wollen der politischen Medienberichterstattung ein Gesicht geben und erste Adresse für aktuelle Themen sein. Wir unterstützen Kollegen bei ihrer Arbeit und knüpfen ein redaktionelles Netzwerk in Brandenburg."
        }

    ]

    $scope.boardMembers = lpkData.getBoardMembers()

}])