import altair as alt

def interactive_theme():
    # Typography
    font = "Helvetica Light"
    labelFont = "Helvetica Light"
    sourceFont = "Helvetica Light"
    
    # Colors
    main_palette = ["#5778a4", "#e49444", "#d1615d", "#85b6b2", "#6a9f58", "#e7ca60", "#a87c9f", "#f1a2a9", "#967662", "#b8b0ac"]
    prism_palette = ['#5F4690','#1D6996','#38A6A5','#0F8554','#73AF48','#EDAD08','#E17C05','#CC503E','#94346E','#6F4070','#994E95','#666666']
    dark2_palette = ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02']
    
    sequential_palette = ["#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494"]
    sunset_dark = ['#fcde9c', '#faa476', '#f0746e', '#e34f6f', '#dc3977', '#b9257a', '#7c1d6f']
    # Axes
    axisColor = "#000000"
    gridColor = "#DEDDDD"
    
    return {
        #"width": 400,
        #"height": 400,
        "config": {
            "background": "transparent",
            "title": {
                "fontSize": 22,
                "font": font,
                "fontWeight": 'bold',
                "anchor": "start",
                "color": "#000000",
                "orient": 'top',
                "offset": 20,
                "subtitleColor": 'gray',
                "subtitleFont": font,
                "subtitleFontWeight": 'normal',
                "subtitleFontSize": 18,
                "subtitlePadding": 2,
            },
            "axis": {
                #domain
                "domain": True,
                "domainCap": 'butt', #butt, round, square
                "domainColor": axisColor,
                "domainWidth": 1,
                
                #grid
                "grid": False,
                "gridColor": gridColor,
                "gridWidth": 0.5,
                "gridCap": 'butt', #butt, round, square
                
                #labels
                "labels": True,
                "labelFont": font,
                "labelFlush": False,
                "labelFontWeight": 'normal', #normal or bold
                "labelFontSize": 18,
                "labelAngle": 0,
                "labelPadding": 2,
                
                #ticks
                "ticks": True,
                "tickCap": 'butt', #butt, round, square
                "tickColor": axisColor,
                "tickSize": 5,
                #"titleFont": font,
                #"tickCount": 3,
                "tickWidth": 2,
                
                #titles
                "titleFont": font,
                "titleAlign": 'center',
                "titleFontSize": 18,
                "titleFontWeight": 'bold',
                "titlePadding": 10,
            },
            "legend": {
                "labelFont": font,
                "labelFontSize": 16,
                "symbolSize": 150,
                "titleFont": font,
                "titleFontSize": 18,
                "titleFontWeight": 'bold',
                "titleLimit": 200,
				#"fillColor": 'light gray',
				#"orient": 'top-left',
                "cornerRadius": 5,
                "rowPadding": 5,
                "symbolType": 'circle',
                "padding": 2,
                "gradientLength": 100,
            },
            "range": {
                "category": main_palette,
                "diverging": sunset_dark,
            },
            "view": {
                "stroke": "transparent", # Remove the border around the visualization
                "strokeWidth": 0,
            },
        }
    }

# Register the custom theme under a chosen name
alt.themes.register('interactive_theme', interactive_theme)

# Enable the newly registered theme
alt.themes.enable('interactive_theme')
