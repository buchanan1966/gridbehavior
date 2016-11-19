/**
 * Created by bucha on 11/19/2016.
 */

$(document).ready(function () {
    $("#recommendedRiskLevel").val("Moderate")
    $("#recommendedViolenceCategory").val("Category 2")
    $("#recommendedSupervisionLevel").val("Moderate/Category 2")
    $('#sendPacts').hide()
    $('#override').hide()


    setRecommended();
    $(".selectable").click(onSelectableClicked)


});

function getSelectableByRiskViolence(riskLevel, violenceCategory) {
    var selectable = $('[riskLevel$="' + riskLevel + '"][violenceCategory$="' + violenceCategory + '"]')
    return selectable
}

function setRecommended() {
    var recommendedRiskLevel = $("#recommendedRiskLevel").val()
    var recommendedViolenceCategory = $("#recommendedViolenceCategory").val()

    var selectable = getSelectableByRiskViolence(recommendedRiskLevel, recommendedViolenceCategory)
    if (selectable) {
        $(selectable).addClass('recommended')
    }
}

function onSelectableClicked(e) {
    $(".selectable").removeClass('selected')
    $(e.target).addClass('selected')
    $('#selectedRiskLevel').val($(e.target).attr('riskLevel'))
    $('#selectedViolenceCategory').val($(e.target).attr('violenceCategory'))
    $('#selectedSupervisionLevel').val($(e.target).attr('supervisionLevel'))
    if ($('#selectedSupervisionLevel').val() == $("#recommendedSupervisionLevel").val()) {
        $('#sendPacts').show()
        $('#override').hide()
    } else {
        $('#sendPacts').hide()
        $('#override').show()
    }

}
