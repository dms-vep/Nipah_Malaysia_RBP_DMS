import altair as alt

def interactive_theme():
    # Typography
    font = "Helvetica"
    
    
    # Colors
    main_palette = ["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]
    prism_palette = ['#5F4690','#1D6996','#38A6A5','#0F8554','#73AF48','#EDAD08','#E17C05','#CC503E','#94346E','#6F4070','#994E95','#666666']

    # Axes
    axisColor = "#A7A9AC"
    gridColor = "#DEDDDD"
    bigfontcolor = 'black'
    smallfontcolor = 'black'
    
    return {
        "config": {
            "background": "transparent",
            "title": {
                "fontSize": 22,
                "font": font,
                "fontWeight": 'normal',
                "anchor": "start",
                "color": bigfontcolor,
                "orient": 'top',
                "offset": 20,
                "subtitleColor": 'gray',
                "subtitleFont": font,
                "subtitleFontWeight": 'normal',
                "subtitleFontSize": 18,
                "subtitlePadding": 3,
            },
            "axis": {
                #domain
                "domain": True,
                "domainCap": 'round', #butt, round, square
                "domainColor": axisColor,
                "domainWidth": 1.5,
                
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
                "labelFontSize": 16,
                "labelAngle": 0,
                "labelPadding": 3,
                
                #ticks
                "ticks": True,
                "tickCap": 'round', #butt, round, square
                "tickColor": axisColor,
                "tickSize": 4,
                #"titleFont": font,
                #"tickCount": 3,
                "tickWidth": 1,
                
                #titles
                "titleFont": font,
                "titleAlign": 'center',
                "titleFontSize": 18,
                "titleFontWeight": 'normal',
                "titlePadding": 10,
            },
            "legend": {
                "labelFont": font,
                "labelFontSize": 16,
                "symbolSize": 150,
                "titleFont": font,
                "titleFontSize": 18,
                "titleFontWeight": 'normal',
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
