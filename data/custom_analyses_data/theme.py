import altair as alt

def brendan_theme():
    # Typography
    font = "Helvetica"
    labelFont = "Helvetica"
    sourceFont = "Helvetica"
    
    # Colors
    main_palette = ["#1f4e79", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    sequential_palette = ["#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494"]

    # Axes
    axisColor = "#000000"
    gridColor = "#DEDDDD"
    
    return {
        "width": 200,
        "height": 200,
        "config": {
            "background": "transparent",
            "title": {
                "fontSize": 18,
                "font": font,
                "anchor": "start",
                "color": "#000000",
                "orient": 'top',
                "offset": 0,
            },
            "axisX": {
                "domain": True,
                "domainColor": axisColor,
                "domainWidth": 1,
                "grid": False,
                "gridColor": gridColor,
                "gridWidth": 0.5,
                "labelFont": labelFont,
                "labelFontSize": 12,
                "labelAngle": 0,
                "tickColor": axisColor,
                "tickSize": 5,
                "titleFont": font,
                "tickCount": 3,
                "titleFontSize": 12,
                "titlePadding": 10,
            },
            "axisY": {
                "domain": True,
                "domainColor": axisColor,
                "domainWidth": 1,
                "grid": False,
                "gridColor": gridColor,
                "gridWidth": 0.5,
                "labelFont": labelFont,
                "labelFontSize": 12,
                "labelAngle": 0,
                "tickColor": axisColor,
                "tickSize": 5,
                "tickCount": 3,
                "titleFont": font,
                "titleFontSize":12,
                "titlePadding": 10,
                "titleAngle": 270,
            },
            "legend": {
                "labelFont": labelFont,
                "labelFontSize": 12,
                "symbolSize": 100,
                "titleFont": font,
                "titleFontSize": 12,
                "padding": 5,
                "titleLimit": 200,
                "gradientLength": 100,
            },
            "range": {
                "category": main_palette,
                "diverging": sequential_palette,
            },
            "view": {
                "stroke": "transparent", # Remove the border around the visualization
            },
            "point": {
            	"filled": True,
            	"size": 25,
            	"opacity": 1,
            	"color": "black",
            },
            "boxplot": {
            	"extent": "min-max",
            	
            }
        }
    }

# Register the custom theme under a chosen name
alt.themes.register('black_marks', brendan_theme)

# Enable the newly registered theme
alt.themes.enable('black_marks')
